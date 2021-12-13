package br.uff.ic.educamais.model;

import javax.persistence.*;
import java.util.List;

@Entity(name = "collection")
@Inheritance(strategy = InheritanceType.JOINED)
public class CollectionModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, length = 1024)
    private String title;

    @Column(nullable = false, length = 4096)
    private String description;

    @Column
    @Lob
    private byte[] image;

    @OneToMany(mappedBy = "collection")
    private List<ResourceModel> resources;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public List<ResourceModel> getResources() {
        return resources;
    }

    public void setResources(List<ResourceModel> resources) {
        this.resources = resources;
    }
}
