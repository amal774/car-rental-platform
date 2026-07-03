package com.carrental.rentalservice.client;

import com.carrental.rentalservice.dto.CarDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "car-service")
public interface CarClient {

    @GetMapping("/cars/{id}")
    CarDTO getCarById(@PathVariable Long id);
}