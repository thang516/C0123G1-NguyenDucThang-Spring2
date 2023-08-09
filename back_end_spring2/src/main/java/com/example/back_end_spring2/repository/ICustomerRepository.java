package com.example.back_end_spring2.repository;

import com.example.back_end_spring2.model.Customers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ICustomerRepository extends JpaRepository<Customers,Integer> {

    Customers getCustomersByUsers_Username(String username);
}
