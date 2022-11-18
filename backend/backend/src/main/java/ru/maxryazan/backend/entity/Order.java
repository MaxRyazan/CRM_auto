package ru.maxryazan.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.util.List;


@Entity
@NoArgsConstructor
@Setter
@Getter
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String client_FIO;
    private String timeOfCreation;

    private String timeOfDeadLine;

    @ManyToMany
    @JoinTable(name = "order_details", joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "detail_id"))
    private List<Detail> details;


    public Order(String client_FIO, String timeOfCreation,
                 String timeOfDeadLine, List<Detail> details) {
        this.client_FIO = client_FIO;
        this.timeOfCreation = timeOfCreation;
        this.timeOfDeadLine = timeOfDeadLine;
        this.details = details;
    }

    @Override
    public String toString() {
        return "Order{" +
                "client_FIO='" + client_FIO + '\'' +
                ", timeOfCreation=" + timeOfCreation +
                ", timeOfDeadLine=" + timeOfDeadLine +
                ", details=" + details +
                '}';
    }
}
