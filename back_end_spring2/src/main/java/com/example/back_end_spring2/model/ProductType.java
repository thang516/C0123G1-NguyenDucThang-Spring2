package com.example.back_end_spring2.model;

import javax.persistence.*;

@Entity
public class ProductType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name_type",nullable = false,unique = true,columnDefinition = "VARCHAR(50)")
    private String nameType ;

    public ProductType(Integer id, String nameType) {
        this.id = id;
        this.nameType = nameType;
    }

    public ProductType() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameType() {
        return nameType;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }
}
