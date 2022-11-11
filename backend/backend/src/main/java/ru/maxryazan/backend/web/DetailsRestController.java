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

    @GetMapping(value = "/details/api/v1/MANUFACTURER/{manufacturer}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Detail>> findByManufacturer(@PathVariable String manufacturer){
        return detailService.findByManufacturer(manufacturer);
    }

    @GetMapping(value = "/details/api/v1/ARTICLE/{article}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Detail>> findByArticle(@PathVariable String article){
        return detailService.findByArticle(article);
    }

    @GetMapping(value = "/details/api/v1/NAME/{name}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Detail>> findByName(@PathVariable String name){
        return detailService.findByName(name);
    }

    @GetMapping(value = "/details/api/v1/MARK/{mark}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Detail>> findByMark(@PathVariable String mark){
        return detailService.findByCarMark(mark);
    }

    @GetMapping(value = "/details/api/v1/VIN/{vin}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Detail>> findByVIN(@PathVariable String vin){
        return detailService.findByVIN(vin);
    }
}
