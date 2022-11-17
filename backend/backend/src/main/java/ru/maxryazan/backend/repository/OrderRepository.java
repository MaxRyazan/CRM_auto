package ru.maxryazan.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.maxryazan.backend.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
}
