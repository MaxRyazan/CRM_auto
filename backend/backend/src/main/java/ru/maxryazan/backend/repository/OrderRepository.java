package ru.maxryazan.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ru.maxryazan.backend.entity.Order;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

  @Query(value = "select * from orders o JOIN order_details od on o.id = od.order_id " +
          "where o.time_of_creation = ?1", nativeQuery = true)
    List<Order> findTodayOrders(String today);
}
