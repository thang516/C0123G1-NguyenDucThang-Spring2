package com.example.back_end_spring2.DTO;

import com.example.back_end_spring2.model.Users;
import org.springframework.validation.annotation.Validated;

import java.lang.annotation.Annotation;

public class CustomerDTO  implements Validated {

        private Integer id;

        private String name;
        private String address;
        private String phone;


        private Users users;

        private String email ;



    public CustomerDTO() {
    }

    public CustomerDTO(Integer id, String name, String address, String phone, Users users, String email) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.users = users;
        this.email = email;

    }

    public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }

        public String getPhone() {
            return phone;
        }

        public void setPhone(String phone) {
            this.phone = phone;
        }

        public Users getUsers() {
            return users;
        }

        public void setUsers(Users users) {
            this.users = users;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }


    @Override
    public Class<?>[] value() {
        return new Class[0];
    }

    @Override
    public Class<? extends Annotation> annotationType() {
        return null;
    }
}


