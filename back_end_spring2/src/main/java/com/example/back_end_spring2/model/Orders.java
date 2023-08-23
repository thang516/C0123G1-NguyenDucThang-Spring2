package com.example.back_end_spring2.model;

import org.hibernate.annotations.CreationTimestamp;
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

    @Column(name = "create_time" ,columnDefinition = "TIMESTAMP DEFAULT now()")
    @CreationTimestamp
    private LocalDateTime createDate;

    @Column(name = "total_amount")
    private Double totalAmount ;

    private  String  status;
    public Orders() {
    }

    public Orders(Integer id, Customers customers, LocalDateTime createDate, Double totalAmount) {
        this.id = id;
        this.customers = customers;
        this.createDate = createDate;
        this.totalAmount = totalAmount;
    }

    public Orders(Integer id, Customers customers, LocalDateTime createDate, Double totalAmount, String status) {
        this.id = id;
        this.customers = customers;
        this.createDate = createDate;
        this.totalAmount = totalAmount;
        this.status = status;
    }

    public Orders(Customers customers, LocalDateTime createDate, Double totalAmount) {
        this.customers = customers;
        this.createDate = createDate;
        this.totalAmount = totalAmount;
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

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
