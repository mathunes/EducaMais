package br.uff.ic.educamais.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class DocumentationController {

    @GetMapping("/")
    public String getDocumentation() {
        return "{\"documentation\": \"https://github.com/mathunes/EducaMais/blob/main/docs/restapi.md\"}";
    }

}
