package com.carrental.rentalservice.service;

import com.carrental.rentalservice.client.CarClient;
import com.carrental.rentalservice.dto.CarDTO;
import com.carrental.rentalservice.entity.Rental;
import com.carrental.rentalservice.repository.RentalRepository;
import com.carrental.rentalservice.entity.RentalStatus;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
public class RentalService {

    private final RentalRepository repository;
    private final CarClient carClient;

    public RentalService(RentalRepository repository,
                         CarClient carClient) {
        this.repository = repository;
        this.carClient = carClient;
    }

    public Rental createRental(Rental rental) {

        if (rental.getEndDate().isBefore(rental.getStartDate())) {
            throw new RuntimeException("Invalid dates");
        }

        if (!isCarAvailable(
                rental.getCarId(),
                rental.getStartDate(),
                rental.getEndDate())) {

            throw new RuntimeException("Car not available");
        }

        CarDTO car = carClient.getCarById(rental.getCarId());
        long days = ChronoUnit.DAYS.between(
                rental.getStartDate(),
                rental.getEndDate()
        );

        double totalPrice = days * car.getPricePerDay();

        rental.setTotalPrice(totalPrice);
        rental.setStatus(RentalStatus.PENDING);
        return repository.save(rental);
    }

    private boolean isCarAvailable(Long carId,
                                   java.time.LocalDate startDate,
                                   java.time.LocalDate endDate) {

        List<Rental> rentals = repository.findByCarId(carId);

        for (Rental r : rentals) {

            boolean overlap =
                    !(endDate.isBefore(r.getStartDate())
                            || startDate.isAfter(r.getEndDate()));

            if (overlap) {
                return false;
            }
        }

        return true;
    }

    public List<Rental> getAllRentals() {
        return repository.findAll();
    }

    public Rental getRentalById(Long id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Rental not found"));
    }

    public void deleteRental(Long id) {
        repository.deleteById(id);
    }
}