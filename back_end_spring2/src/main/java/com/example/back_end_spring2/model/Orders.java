package com.example.back_end_spring2.model;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn
    private Customers customers;

    @Column(name = "create_time" ,nullable = false,unique = true,columnDefinition = "DATETIME DEFAULT now()")
    @CreatedDate
    private LocalDateTime createDate;

    public Orders(Integer id, Customers customers, LocalDateTime createDate) {
        this.id = id;
        this.customers = customers;
        this.createDate = createDate;
    }

    public Orders() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Customers getCustomers() {
        return customers;
    }

    public void setCustomers(Customers customers) {
        this.customers = customers;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }
}
