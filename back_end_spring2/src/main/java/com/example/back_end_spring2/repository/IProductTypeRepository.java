package com.example.back_end_spring2.repository;

import com.example.back_end_spring2.model.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductTypeRepository extends JpaRepository<ProductType,Integer> {

    @Query(value = "SELECT pt.*,p.name_product,p.price,p.img FROM product_type pt INNER JOIN products p on pt.id = p.product_type_id\n" +
            "WHERE pt.id = 4 LIMIT 4",nativeQuery = true)
    List<ProductType> getAll();
}
