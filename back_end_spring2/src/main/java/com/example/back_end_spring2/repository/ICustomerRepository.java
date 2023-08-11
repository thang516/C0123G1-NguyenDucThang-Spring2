package com.example.back_end_spring2.repository;

import com.example.back_end_spring2.model.Customers;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface ICustomerRepository extends JpaRepository<Customers,Integer> {



    @Query(value ="SELECT * FROM customers c WHERE  c.is_delete = false",nativeQuery = true)
    Page<Customers> getAll(Pageable pageable);

    @Transactional
    @Modifying
    @Query(value = "UPDATE customers c SET c.is_delete = true WHERE c.id = :id ",nativeQuery = true)
    void deleteCustomer(@Param("id") Integer id);


    @Query(value = "INSERT INTO customers(name ,address, phone, users_id, email) VALUES (:name,:address,:phone,:user_id,:email)",nativeQuery = true)
    void saveProduct(@Param("name") String name,@Param("address") String address,@Param("phone") String phone,@Param("user_id") Integer user_id,@Param("email") String email);

    @Query(value = "SELECT c.* FROM customers c\n" +
            "    INNER  JOIN users u on c.users_id = u.id WHERE u.username = :username AND c.is_delete = false",nativeQuery = true)
    Customers getCustomersByUser(@Param("username") String username);
}
