package com.example.back_end_spring2.repository;

import com.example.back_end_spring2.model.Colors;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IColorRepository extends JpaRepository<Colors ,Integer> {
}
