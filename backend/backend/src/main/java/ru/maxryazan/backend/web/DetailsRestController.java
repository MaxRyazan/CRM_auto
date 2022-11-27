package ru.maxryazan.backend.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.maxryazan.backend.entity.Detail;
import ru.maxryazan.backend.entity.Order;
import ru.maxryazan.backend.service.DetailService;
import ru.maxryazan.backend.service.OrderService;
import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class DetailsRestController {


    private final DetailService detailService;
    private final OrderService orderService;

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
        return detailService.findByCarMark(mark.toUpperCase());
    }

    @GetMapping(value = "/details/api/v1/VIN/{vin}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Detail>> findByVIN(@PathVariable String vin){
        return detailService.findByVIN(vin);
    }

    @GetMapping(value = "/details/api/v1/order-today", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Order>> findTodayOrders(){
        return orderService.findTodayOrders();
    }

    @GetMapping(value = "/details/api/v1/order-all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Order>> findAllOrders(){
        return orderService.findAllOrders();
    }

    @GetMapping(value = "/details/api/v1/mixVM/{vin}/{carMark}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Detail>> findByVinAndCarMark(@PathVariable String vin,
                                                            @PathVariable String carMark){
        return detailService.findByVinAndCarMark(vin, carMark);
    }

    @GetMapping(value = "details/api/v1/mixAM/{article}/{manufacturer}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Detail>> findByArticleAndManufacturer(@PathVariable String article,
                                                            @PathVariable String manufacturer){
        return detailService.findByArticleAndManufacturer(article, manufacturer);
    }

    @PostMapping(value = "/details/api/v1/order-new")
    public void post(@RequestBody String[] data){
        orderService.createAndSaveOrder(data);
    }
}


