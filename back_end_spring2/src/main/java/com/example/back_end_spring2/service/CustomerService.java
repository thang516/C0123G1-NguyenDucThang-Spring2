package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.Customers;
import com.example.back_end_spring2.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService{

    @Autowired
    private ICustomerRepository customerRepository ;
    @Override
    public Customers getCustomer(String username) {
        return customerRepository.getCustomersByUsers_Username(username);
    }
}
