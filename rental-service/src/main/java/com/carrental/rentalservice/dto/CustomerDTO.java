package com.carrental.rentalservice.dto;

import lombok.Data;

@Data
public class CustomerDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private Integer age;
    private String email;
    private String phone;
}