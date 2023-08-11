package com.example.back_end_spring2.repository;


import com.example.back_end_spring2.model.ShoppingCards;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IShoppingRepository extends JpaRepository<ShoppingCards,Integer> {


    @Query(value = "SELECT * FROM shopping_cards sp WHERE sp.customers_id = :customer_id AND sp.products_id= :product_id",nativeQuery = true)
    ShoppingCards getToCart(@Param("customer_id") Integer customer_id,@Param("product_id") Integer product_id);

    @Query(value = "SELECT sp.* FROM shopping_cards sp  INNER  JOIN customers c on sp.customers_id = c.id WHERE sp.customers_id = :id",nativeQuery = true)
    List<ShoppingCards> findAllByCustomers(@Param("id") Integer id);
}
