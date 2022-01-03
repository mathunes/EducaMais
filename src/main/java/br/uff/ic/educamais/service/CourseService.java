package br.uff.ic.educamais.service;

import br.uff.ic.educamais.model.CourseModel;
import br.uff.ic.educamais.model.ResourceModel;
import br.uff.ic.educamais.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository repository;

    @Autowired
    private ResourceService resourceService;

    public CourseModel saveCourse(CourseModel course) {

        CourseModel newCourse = repository.save(course);

        course.getResources().forEach(resource -> {

            ResponseEntity<?> existingResource = resourceService.getResource(resource.getId());

            if (existingResource.getBody() instanceof ResourceModel) {

                ((ResourceModel) existingResource.getBody()).setCollection(course);

                resourceService.updateResource((ResourceModel) existingResource.getBody());

            }

        });

        return newCourse;
    }

    public List<CourseModel> getCourses() {
        return (List<CourseModel>) repository.findAll();
    }

    public ResponseEntity<?> getCourse(Long id) {
        CourseModel existingCourse = repository
                .findById(id)
                .orElse(null);

        if (existingCourse == null)
            return new ResponseEntity<>("{\"message\":\"course does not exist\"}", HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(existingCourse, HttpStatus.OK);
    }

    public ResponseEntity<?> updateCourse(CourseModel course) {
        CourseModel existingCourse = repository
                .findById(course.getId())
                .orElse(null);

        if (existingCourse == null)
            return new ResponseEntity<>("{\"message\":\"course does not exist\"}", HttpStatus.NOT_FOUND);

        if (course.getTitle() != null)
            existingCourse.setTitle(course.getTitle());

        if (course.getDescription() != null)
            existingCourse.setDescription(course.getDescription());

        if (course.getImage() != null)
            existingCourse.setImage(course.getImage());

//        if (course.getResources() != null)
//            existingCourse.setResources(course.getResources());

        if (course.getRegisterDate() != null)
            existingCourse.setRegisterDate(course.getRegisterDate());

        return new ResponseEntity<>(repository.save(existingCourse), HttpStatus.OK);

    }

    public ResponseEntity<?> deleteCourse(Long id) {

        CourseModel existingCourse = repository
                .findById(id)
                .orElse(null);

        if (existingCourse == null)
            return new ResponseEntity<>("{\"message\":\"course does not exist\"}", HttpStatus.NOT_FOUND);

        //Removing relationship
        existingCourse.getResources().forEach(resource -> {

            ResponseEntity<?> existingResource = resourceService.getResource(resource.getId());

            if (existingResource.getBody() instanceof ResourceModel) {

                ((ResourceModel) existingResource.getBody()).setCollection(null);

                resourceService.updateResource((ResourceModel) existingResource.getBody());

            }

        });

        repository.deleteById(id);

        return new ResponseEntity<>("{\"message\":\"removed course\"}", HttpStatus.OK);
    }


}
