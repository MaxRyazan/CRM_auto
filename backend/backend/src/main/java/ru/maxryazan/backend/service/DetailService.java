package ru.maxryazan.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ru.maxryazan.backend.entity.CarMark;
import ru.maxryazan.backend.entity.Detail;
import ru.maxryazan.backend.repository.DetailRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DetailService {

    private final DetailRepository detailRepository;

    public ResponseEntity<List<Detail>> findByName(String name) {
        List<Detail> details = detailRepository.findByName(name);
        if(!details.isEmpty()) {
            return new ResponseEntity<>(details, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<List<Detail>> findByArticle(String article){
        List<Detail> details = detailRepository.findByArticle(article);
        if(!details.isEmpty()) {
            return new ResponseEntity<>(details, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<List<Detail>> findAll(){
        return new ResponseEntity<>(detailRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<List<Detail>> findByVIN(String vin){
        List<Detail> details = detailRepository.findByVin(vin);
        if(!details.isEmpty()) {
            return new ResponseEntity<>(details, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.NOT_FOUND);
        }
    }


    public ResponseEntity<List<Detail>> findByManufacturer(String manufacturer){
        List<Detail> details = detailRepository.findByManufacturer(manufacturer);
        if(!details.isEmpty()) {
            return new ResponseEntity<>(details, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.NOT_FOUND);
        }
    }


    public ResponseEntity<List<Detail>> findByCarMark(String mark){
        List<Detail> details = detailRepository.findByCarMarks(mark);
        if(!details.isEmpty()) {
            return new ResponseEntity<>(details, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.NOT_FOUND);
        }
    }


    public Detail findById(long id) {
        return detailRepository.findById(id);
    }

    public ResponseEntity<List<Detail>> findByVinAndCarMark(String vin, String carMark) {
        return new ResponseEntity<>(detailRepository.findByVINAndCarMarks(vin, carMark), HttpStatus.OK);
    }

    public ResponseEntity<List<Detail>> findByArticleAndManufacturer(String article, String manufacturer) {
        return new ResponseEntity<>(detailRepository.findByArticleAndManufacturer(article, manufacturer), HttpStatus.OK);
    }
}
