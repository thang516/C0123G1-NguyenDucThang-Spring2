package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.Colors;
import com.example.back_end_spring2.repository.IColorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColortService implements IColorService{

    @Autowired
    private IColorRepository colorRepository;

    @Override
    public List<Colors> findAllColor() {
        return colorRepository.findAll();
    }
}
