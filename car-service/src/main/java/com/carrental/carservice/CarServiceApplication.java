package com.carrental.carservice;

import com.carrental.carservice.entity.Car;
import com.carrental.carservice.repository.CarRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CarServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(CarServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner seedCars(CarRepository carRepository) {
        return args -> {
            if (carRepository.count() > 0) {
                return;
            }

            carRepository.save(new Car(
                    null,
                    "Toyota",
                    "Corolla Hybrid",
                    120.0,
                    true,
                    5,
                    "Automatique",
                    "Hybride",
                    "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200",
                    "Berline economique, confortable et ideale pour les longs trajets."
            ));

            carRepository.save(new Car(
                    null,
                    "BMW",
                    "Serie 3",
                    220.0,
                    true,
                    5,
                    "Automatique",
                    "Essence",
                    "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200",
                    "Voiture premium avec design sportif et excellente tenue de route."
            ));

            carRepository.save(new Car(
                    null,
                    "Mercedes",
                    "Classe A",
                    240.0,
                    false,
                    5,
                    "Automatique",
                    "Diesel",
                    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200",
                    "Compacte luxueuse, parfaite pour la ville et les voyages."
            ));

            carRepository.save(new Car(
                    null,
                    "Hyundai",
                    "Tucson",
                    180.0,
                    true,
                    5,
                    "Automatique",
                    "Hybride",
                    "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200",
                    "SUV moderne, spacieux et confortable."
            ));
        };
    }
}
