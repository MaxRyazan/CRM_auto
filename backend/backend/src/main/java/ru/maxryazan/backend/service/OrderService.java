package ru.maxryazan.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ru.maxryazan.backend.entity.Detail;
import ru.maxryazan.backend.entity.Order;
import ru.maxryazan.backend.repository.OrderRepository;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;

    public void save(Order order){
        orderRepository.save(order);
    }


    public ResponseEntity<List<Order>> findTodayOrders() {
        return new ResponseEntity<>(orderRepository.findTodayOrders(todayDate()), HttpStatus.OK);
    }

    private String todayDate() {
        Date date = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("d-MM-yyyy");
        System.out.println(simpleDateFormat.format(date));
        return simpleDateFormat.format(date);
    }

    public ResponseEntity<List<Order>> findAllOrders() {
        return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.OK);
    }
}
