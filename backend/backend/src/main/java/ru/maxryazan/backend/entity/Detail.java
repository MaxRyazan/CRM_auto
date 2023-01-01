package ru.maxryazan.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "detail")
@Getter
public class Detail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String vin;

    private String article;

    private String manufacturer;

    @ElementCollection(targetClass = CarMark.class)
    @Enumerated(EnumType.STRING)
    private List<CarMark> carMarks;

    private BigDecimal price;

    private String description;

    @Transient
    @ManyToMany
    @JoinTable(name = "order_details", joinColumns = @JoinColumn(name = "detail_id"),
            inverseJoinColumns = @JoinColumn(name = "order_id"))
    private List<Order> orders;

    @ElementCollection
    private List<String> photos;

    public Detail(String name, String vin, String article, String manufacturer,
                  List<CarMark> carMarks, String description) {
        this.name = name;
        this.vin = vin;
        this.article = article;
        this.manufacturer = manufacturer;
        this.carMarks = carMarks;
        this.description = description;
        this.photos = List.of(id + "1.png", id + "2.png");
    }

    @Override
    public String toString() {
        return "Detail{" +
                "name='" + name + '\'' +
                ", VIN='" + vin + '\'' +
                ", article='" + article + '\'' +
                ", manufacturer='" + manufacturer + '\'' +
                ", carMarks=" + carMarks +
                ", description='" + description + '\'' +
                ", photos=" + photos +
                '}';
    }
}
