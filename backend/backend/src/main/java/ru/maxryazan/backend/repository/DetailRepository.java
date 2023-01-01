package ru.maxryazan.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.maxryazan.backend.entity.Detail;
import java.util.List;

@Repository
public interface DetailRepository extends JpaRepository<Detail, Long> {

    List<Detail> findByName(String name);
    List<Detail> findByArticle(String article);
    List<Detail> findByVin(String vin);
    List<Detail> findByManufacturer(String manufacturer);
    Detail findById(long id);

    @Query(value = "select * from detail d  JOIN detail_car_marks m where m.car_marks = ?1 and d.id = m.detail_id", nativeQuery = true)
    List<Detail> findByCarMarks(String mark);

    @Query(value = "select * from detail d JOIN detail_car_marks dcm on d.id = dcm.detail_id where d.vin = ?1 and dcm.car_marks = ?2", nativeQuery = true)
    List<Detail> findByVINAndCarMarks(String VIN, String carMarks);

    @Query(value = "select * from detail d where d.article = ?1 AND d.manufacturer = ?2", nativeQuery = true)
    List<Detail> findByArticleAndManufacturer(String article, String manufacturer);
}
