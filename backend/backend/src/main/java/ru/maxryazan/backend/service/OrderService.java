package ru.maxryazan.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.maxryazan.backend.entity.Detail;
import ru.maxryazan.backend.entity.Order;
import ru.maxryazan.backend.repository.OrderRepository;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final DetailService detailService;

    public void save(Order order){
        orderRepository.save(order);
    }

    public void createAndSaveOrder(String[] data) {
        List<Detail> details = new ArrayList<>();

        for (int i = 3; i < data.length; i++) {
            Detail detail = detailService.findById(Long.parseLong(data[i]));
            details.add(detail);
        }
        Order order = new Order(data[0], data[1], data[2], details);
        save(order);
    }
}
