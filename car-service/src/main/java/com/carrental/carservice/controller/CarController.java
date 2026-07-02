package com.carrental.carservice.controller;
import com.carrental.carservice.entity.Car;
import com.carrental.carservice.repository.CarRepository;
import com.carrental.carservice.service.CarService;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/cars")

public class CarController {
    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping
    public List<Car> getAll() {
        return carService.getAllCars();
    }

    @PostMapping
    public Car add(@RequestBody Car car) {
        return carService.addCar(car);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        carService.deleteCar(id);
    }

    @GetMapping("/{id}")
    public Car getById(@PathVariable Long id) {
        return carService.getCarById(id);
    }

    @PutMapping("/{id}")
    public Car update(
            @PathVariable Long id,
            @RequestBody Car car) {

        return carService.updateCar(id, car);
    }
}
