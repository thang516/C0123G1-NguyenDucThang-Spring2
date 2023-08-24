package com.example.back_end_spring2.service;


import com.example.back_end_spring2.model.Users;

public interface IUsersService {
    Users findByUsername(String username);
    Users findByEmail(String email);
    void editUser(Users users);

    Users findById(Integer id);
    void saveNewPassword(Users users);

    void save(Users users);

    Users findAccount(Integer id);
}
