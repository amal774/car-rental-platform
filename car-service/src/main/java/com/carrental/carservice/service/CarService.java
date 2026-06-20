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

    public Car addCar(Car car) {
        return carRepository.save(car);
    }

    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }

}
