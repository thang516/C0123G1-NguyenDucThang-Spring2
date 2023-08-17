package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.Colors;

import java.util.List;

public interface IColorService {
    List<Colors> findAllColor();
}
