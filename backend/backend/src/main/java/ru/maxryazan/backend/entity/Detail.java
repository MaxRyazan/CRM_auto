package ru.maxryazan.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
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

    private String VIN;

    private String article;

    private String manufacturer;

    @ElementCollection(targetClass = CarMark.class)
    @Enumerated(EnumType.STRING)
    private List<CarMark> carMarks;

    private String description;

    @ElementCollection
    private List<String> photos;

    public Detail(String name, String VIN, String article, String manufacturer,
                  List<CarMark> carMarks, String description) {
        this.name = name;
        this.VIN = VIN;
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
                ", VIN='" + VIN + '\'' +
                ", article='" + article + '\'' +
                ", manufacturer='" + manufacturer + '\'' +
                ", carMarks=" + carMarks +
                ", description='" + description + '\'' +
                ", photos=" + photos +
                '}';
    }
}
