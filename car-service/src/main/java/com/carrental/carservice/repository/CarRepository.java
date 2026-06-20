package com.carrental.carservice.repository;
import com.carrental.carservice.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
public interface CarRepository extends JpaRepository<Car, Long> {
}
