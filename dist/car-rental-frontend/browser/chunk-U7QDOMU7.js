import {
  API_BASE_URL,
  HttpClient
} from "./chunk-NDTMUZAB.js";
import {
  Injectable,
  __spreadProps,
  __spreadValues,
  catchError,
  map,
  of,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-GW6N2EK3.js";

// src/app/services/car.service.ts
var CarService = class _CarService {
  http;
  apiUrl = `${API_BASE_URL}/cars`;
  storageKey = "rentcar_cars_cache";
  defaultCars = [
    { id: 1, brand: "Toyota", model: "Corolla Hybrid", pricePerDay: 120, available: true, image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200", gallery: ["https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200", "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1200"], transmission: "Automatique", fuel: "Hybride", seats: 5, description: "Berline economique, confortable et ideale pour les longs trajets." },
    { id: 2, brand: "BMW", model: "Serie 3", pricePerDay: 220, available: true, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200", gallery: ["https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200"], transmission: "Automatique", fuel: "Essence", seats: 5, description: "Voiture premium avec design sportif et excellente tenue de route." },
    { id: 3, brand: "Mercedes", model: "Classe A", pricePerDay: 240, available: false, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200", gallery: ["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200"], transmission: "Automatique", fuel: "Diesel", seats: 5, description: "Compacte luxueuse, parfaite pour la ville et les voyages." },
    { id: 4, brand: "Hyundai", model: "Tucson", pricePerDay: 180, available: true, image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200", gallery: ["https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200"], transmission: "Automatique", fuel: "Hybride", seats: 5, description: "SUV moderne, spacieux et confortable." }
  ];
  constructor(http) {
    this.http = http;
  }
  getCars() {
    return this.http.get(this.apiUrl).pipe(map((cars) => cars.map((car) => this.fromApiCar(car))), tap((cars) => this.saveCache(cars)), catchError(() => of(this.loadCache())));
  }
  getCarById(id) {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(map((car) => this.fromApiCar(car)), catchError(() => this.getCars().pipe(map((cars) => cars.find((car) => car.id === id)))));
  }
  addCar(car) {
    return this.http.post(this.apiUrl, this.toApiCar(car)).pipe(map((created) => this.fromApiCar(created)));
  }
  updateCar(id, updatedCar) {
    return this.http.put(`${this.apiUrl}/${id}`, this.toApiCar(updatedCar, id)).pipe(map((car) => this.fromApiCar(car)));
  }
  deleteCar(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  toggleAvailability(id) {
    return this.getCarById(id).pipe(map((car) => car ? __spreadProps(__spreadValues({}, car), { available: !car.available }) : void 0), tap((car) => {
      if (!car)
        return;
      this.updateCar(car.id, car).subscribe();
    }));
  }
  fromApiCar(car) {
    const image = car.imageUrl || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200";
    return {
      id: car.id ?? Date.now(),
      brand: car.brand,
      model: car.model,
      pricePerDay: car.pricePerDay,
      available: car.available ?? true,
      image,
      gallery: [image],
      transmission: car.transmission,
      fuel: car.fuelType,
      seats: car.seats,
      description: car.description
    };
  }
  toApiCar(car, id) {
    return {
      id,
      brand: car.brand,
      model: car.model,
      pricePerDay: Number(car.pricePerDay),
      available: car.available,
      seats: Number(car.seats),
      transmission: car.transmission,
      fuelType: car.fuel,
      imageUrl: car.image,
      description: car.description
    };
  }
  loadCache() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : this.defaultCars;
  }
  saveCache(cars) {
    localStorage.setItem(this.storageKey, JSON.stringify(cars));
  }
  static \u0275fac = function CarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CarService, factory: _CarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CarService
};
//# sourceMappingURL=chunk-U7QDOMU7.js.map
