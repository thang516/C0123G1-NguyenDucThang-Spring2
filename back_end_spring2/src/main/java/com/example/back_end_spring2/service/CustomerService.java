package com.example.back_end_spring2.service;

import com.example.back_end_spring2.DTO.CustomerDTO;
import com.example.back_end_spring2.model.Customers;
import com.example.back_end_spring2.model.Roles;
import com.example.back_end_spring2.model.Users;
import com.example.back_end_spring2.repository.ICustomerRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService{

    @Autowired
    private ICustomerRepository customerRepository ;

    @Autowired
    private IUsersService usersService;
    @Override
    public Customers getCustomer(String username) {
        return customerRepository.getCustomersByUser(username);
    }

    @Override
    public Page<Customers> getAll(Pageable pageable) {
        return customerRepository.getAll(pageable);
    }

    @Override
    public void deleteByCustomer(Integer id) {
        customerRepository.deleteCustomer(id);
    }

    @Override
    public void save(CustomerDTO customerDTO) {
//        Users users = new Users(customerDTO.getUsers().getUsername(),customerDTO.getUsers().getPassword() ,new Roles(2,"CUSTOMER"));
//        usersService.save(users) ;
        Customers customers = new Customers();
//        Users users1 = usersService.findAccount(users.getId());
//        customers.setUsers(users1);
        BeanUtils.copyProperties(customerDTO,customers);
        customerRepository.saveProduct(customers.getName(),customers.getAddress(),customers.getPhone(),customers.getUsers().getId(),customers.getEmail());
    }

    @Override
    public  Customers findById(Integer id) {
        return customerRepository.findById(id).get();
    }

    @Override
    public Customers getCus(String username) {
        return customerRepository.getCustomer(username);
    }
}
