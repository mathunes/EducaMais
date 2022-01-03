package br.uff.ic.educamais.controller;

import br.uff.ic.educamais.model.CourseModel;
import br.uff.ic.educamais.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CourseController {

    @Autowired
    private CourseService service;

    @PostMapping("/course")
    public CourseModel create(@RequestBody CourseModel course) {
        return service.saveCourse(course);
    }

    @GetMapping("/course/{id}")
    public ResponseEntity<?> read(@PathVariable("id") Long id) {
        return service.getCourse(id);
    }

    @GetMapping("/course")
    public List<CourseModel> readAll() {
        return service.getCourses();
    }

    @PutMapping("/course")
    public ResponseEntity<?> update(@RequestBody CourseModel course) {
        return service.updateCourse(course);
    }

    @DeleteMapping("/course/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        return service.deleteCourse(id);
    }

}
