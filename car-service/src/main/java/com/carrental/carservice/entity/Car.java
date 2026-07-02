package com.carrental.carservice.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String brand;

    private String model;

    private Double pricePerDay;

    private Boolean available = true;

    private Integer seats;

    private String transmission;

    private String fuelType;

    private String imageUrl;

    @Column(length = 1000)
    private String description;
}