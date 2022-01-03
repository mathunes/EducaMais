package br.uff.ic.educamais.service;

import br.uff.ic.educamais.model.AuthorModel;
import br.uff.ic.educamais.model.ResourceModel;
import br.uff.ic.educamais.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class ResourceService {

    @Autowired
    private ResourceRepository repository;

    @Autowired
    private AuthorService authorService;

    public ResourceModel saveResource(@RequestBody ResourceModel resource) {

        ResourceModel newResource = repository.save(resource);

        resource.getAuthors().forEach(author -> {

            ResponseEntity<?> existingAuthor = authorService.getAuthorById(author.getId());

            if (existingAuthor.getBody() instanceof AuthorModel) {

                ((AuthorModel) existingAuthor.getBody()).getResources().add(resource);

                authorService.updateAuthor((AuthorModel) existingAuthor.getBody());

            }

        });

        return newResource;
    }

    public List<ResourceModel> getResources() {
        return (List<ResourceModel>) repository.findAll();
    }

    public ResponseEntity<?> getResource(Long id) {
        ResourceModel existingResource = repository
                .findById(id)
                .orElse(null);

        if (existingResource == null)
            return new ResponseEntity<>("{\"message\":\"resource does not exist\"}", HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(existingResource, HttpStatus.OK);
    }

    public ResponseEntity<?> getResourceByAuthor(Long id) {
        ResponseEntity<?> existingAuthor = authorService.getAuthorById(id);

        if (existingAuthor.getStatusCodeValue() == 404)
            return new ResponseEntity<>("{\"message\":\"author does not exist\"}", HttpStatus.NOT_FOUND);

        List<ResourceModel> resources = repository.findByAuthor(id);

        return new ResponseEntity<>(resources, HttpStatus.OK);
    }

    public ResponseEntity<?> updateResource(ResourceModel resource) {
        ResourceModel existingResource = repository
                .findById(resource.getId())
                .orElse(null);

        if (existingResource == null)
            return new ResponseEntity<>("{\"message\":\"resource does not exist\"}", HttpStatus.NOT_FOUND);

        if (resource.getTitle() != null)
            existingResource.setTitle(resource.getTitle());

        if (resource.getDescription() != null)
            existingResource.setDescription(resource.getDescription());

        if (resource.getLink() != null)
            existingResource.setLink(resource.getLink());

        if (resource.getImage() != null)
            existingResource.setImage(resource.getImage());

        if (resource.getCreatedAt() != null)
            existingResource.setCreatedAt(resource.getCreatedAt());

        if (resource.getRegisteredAt() != null)
            existingResource.setRegisteredAt(resource.getRegisteredAt());

        if (resource.getKeyWord() != null)
            existingResource.setKeyWord(resource.getKeyWord());

//        Verificar se é necessário
//        if (resource.getAuthors() != null)
//            existingResource.setAuthors(resource.getAuthors());

        if (resource.getCollection() != null)
            existingResource.setCollection(resource.getCollection());

        return new ResponseEntity<>(repository.save(existingResource), HttpStatus.OK);

    }

    public ResponseEntity<?> deleteResource(Long id) {

        ResourceModel existingResource = repository
                .findById(id)
                .orElse(null);

        if (existingResource == null)
            return new ResponseEntity<>("{\"message\":\"resource does not exist\"}", HttpStatus.NOT_FOUND);

        repository.deleteById(id);

        return new ResponseEntity<>("{\"message\":\"removed resource\"}", HttpStatus.OK);
    }

}
