package com.carrental.carservice.service;

import com.carrental.carservice.entity.Car;
import com.carrental.carservice.repository.CarRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {

    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    public Car getCarById(Long id) {
        return carRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Car not found"));
    }

    public Car addCar(Car car) {
        if (car.getAvailable() == null) {
            car.setAvailable(true);
        }

        return carRepository.save(car);
    }

    public Car updateCar(Long id, Car updatedCar) {

        Car car = carRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Car not found"));

        car.setBrand(updatedCar.getBrand());
        car.setModel(updatedCar.getModel());
        car.setPricePerDay(updatedCar.getPricePerDay());
        car.setAvailable(updatedCar.getAvailable());
        car.setSeats(updatedCar.getSeats());
        car.setTransmission(updatedCar.getTransmission());
        car.setFuelType(updatedCar.getFuelType());
        car.setImageUrl(updatedCar.getImageUrl());
        car.setDescription(updatedCar.getDescription());

        return carRepository.save(car);
    }

    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }
}