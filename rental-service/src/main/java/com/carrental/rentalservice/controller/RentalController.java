package com.carrental.rentalservice.controller;

import com.carrental.rentalservice.entity.Rental;
import com.carrental.rentalservice.service.RentalService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rentals")
public class RentalController {

    private final RentalService service;

    public RentalController(RentalService service) {
        this.service = service;
    }

    @PostMapping
    public Rental createRental(@RequestBody Rental rental) {
        return service.createRental(rental);
    }

    @GetMapping
    public List<Rental> getAllRentals() {
        return service.getAllRentals();
    }

    @GetMapping("/{id}")
    public Rental getRentalById(@PathVariable Long id) {
        return service.getRentalById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteRental(@PathVariable Long id) {
        service.deleteRental(id);
    }
}