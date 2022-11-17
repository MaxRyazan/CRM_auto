package ru.maxryazan.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.maxryazan.backend.entity.Detail;
import java.util.List;

@Repository
public interface DetailRepository extends JpaRepository<Detail, Long> {

    List<Detail> findByName(String name);
    List<Detail> findByArticle(String article);
    List<Detail> findByVIN(String VIN);
    List<Detail> findByManufacturer(String manufacturer);
    Detail findById(long id);

}
