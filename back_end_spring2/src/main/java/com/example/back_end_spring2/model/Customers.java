package com.example.back_end_spring2.model;


import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Customers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false,columnDefinition ="VARCHAR(50)" )
    private String name;
    @Column(nullable = false,columnDefinition = "VARCHAR(100)")
    private String address;
    @Column(nullable = false,columnDefinition = "VARCHAR(10)")
    private String phone;

    @OneToOne
    @JoinColumn
    private Users users;

    @Column(nullable = false,unique = true,columnDefinition = "VARCHAR(50)")
    private String email ;

    @Column(name = "create_time" ,nullable = false,unique = true,columnDefinition = "DATETIME DEFAULT now()")
    @CreatedDate
    private LocalDateTime createDate;

    @Column(name = "update_time" ,nullable = false,unique = true,columnDefinition = "DATETIME DEFAULT now()")
    @CreatedDate
    private LocalDateTime updateTime;

    @Column(columnDefinition = "BIT DEFAULT 0", updatable = true)
    private boolean isDelete;

    @Column(columnDefinition = "TEXT")
    private String image ;


    public Customers() {
    }

    public Customers(Integer id, String name, String address, String phone, Users users, String email, LocalDateTime createDate, LocalDateTime updateTime, boolean isDelete, String image) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.users = users;
        this.email = email;
        this.createDate = createDate;
        this.updateTime = updateTime;
        this.isDelete = isDelete;
        this.image = image;
    }

    public Customers(Integer id, String name, String address, String phone, Users users, String email, LocalDateTime createDate, LocalDateTime updateTime, boolean isDelete) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.users = users;
        this.email = email;
        this.createDate = createDate;
        this.updateTime = updateTime;
        this.isDelete = isDelete;
    }

    public Customers(String name, String address, String phone, Users users, String email, LocalDateTime createDate, LocalDateTime updateTime, boolean isDelete) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.users = users;
        this.email = email;
        this.createDate = createDate;
        this.updateTime = updateTime;
        this.isDelete = isDelete;
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

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public LocalDateTime getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(LocalDateTime updateTime) {
        this.updateTime = updateTime;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
