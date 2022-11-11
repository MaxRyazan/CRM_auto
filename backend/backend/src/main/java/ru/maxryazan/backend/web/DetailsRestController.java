package ru.maxryazan.backend.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import ru.maxryazan.backend.entity.Detail;
import ru.maxryazan.backend.service.DetailService;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class DetailsRestController {

    private final DetailService detailService;

    @GetMapping(value = "/details/api/v1/{manufacturer}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Detail>> findByManufacturer(@PathVariable String manufacturer){
        return detailService.findByManufacturer(manufacturer);
    }

    @GetMapping(value = "/details/api/v1/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Detail>> findAll(){
        return detailService.findAll();
    }
}
