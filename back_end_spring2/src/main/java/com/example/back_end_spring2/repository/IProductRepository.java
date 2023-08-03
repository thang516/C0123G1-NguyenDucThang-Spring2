package com.example.back_end_spring2.repository;


import com.example.back_end_spring2.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductRepository extends JpaRepository<Products,Integer> {

    
}
