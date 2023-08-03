package com.example.back_end_spring2.model;

import javax.persistence.*;

@Entity
public class Colors {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id ;

    @Column(name = "name_color",nullable = false,unique = true,columnDefinition = "VARCHAR(50)")
    private String nameColor;

    public Colors(Integer id, String nameColor) {
        this.id = id;
        this.nameColor = nameColor;
    }

    public Colors() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameColor() {
        return nameColor;
    }

    public void setNameColor(String nameColor) {
        this.nameColor = nameColor;
    }
}
