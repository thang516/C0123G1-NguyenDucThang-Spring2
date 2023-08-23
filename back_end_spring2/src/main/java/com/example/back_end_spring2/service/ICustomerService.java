package com.example.back_end_spring2.service;

import com.example.back_end_spring2.DTO.CustomerDTO;
import com.example.back_end_spring2.model.Customers;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICustomerService {
    Customers getCustomer(String username);

    Page<Customers> getAll(Pageable pageable);

    void deleteByCustomer(Integer id);

    void save(CustomerDTO customerDTO);

   Customers findById(Integer id);

    Customers getCus(String username);
}
