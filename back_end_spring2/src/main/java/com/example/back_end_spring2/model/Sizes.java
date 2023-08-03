package com.example.back_end_spring2.model;


import javax.persistence.*;

@Entity
public class Sizes {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id ;

    @Column(name = "name_size",nullable = false,unique = true,columnDefinition = "VARCHAR(50)")
    private String nameSize ;

    public Sizes(Integer id, String nameSize) {
        this.id = id;
        this.nameSize = nameSize;
    }

    public Sizes() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameSize() {
        return nameSize;
    }

    public void setNameSize(String nameSize) {
        this.nameSize = nameSize;
    }
}
