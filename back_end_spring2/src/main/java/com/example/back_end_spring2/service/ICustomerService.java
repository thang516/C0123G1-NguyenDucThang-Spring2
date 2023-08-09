package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.Customers;

public interface ICustomerService {
    Customers getCustomer(String username);
}
