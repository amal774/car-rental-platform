package com.carrental.rentalservice.dto;

import lombok.Data;

@Data
public class CarDTO {
    private Long id;
    private String brand;
    private String model;
    private Double pricePerDay;
}