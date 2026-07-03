<<<<<<< HEAD
package com.carrental.rentalservice.repository;

import com.carrental.rentalservice.entity.Rental;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RentalRepository extends JpaRepository<Rental, Long> {

    List<Rental> findByCarId(Long carId);
=======
package com.carrental.rentalservice.repository;

import com.carrental.rentalservice.entity.Rental;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RentalRepository extends JpaRepository<Rental, Long> {

    List<Rental> findByCarId(Long carId);
>>>>>>> 9875c639 (version finale v01)
}