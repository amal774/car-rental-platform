import {
  API_BASE_URL,
  HttpClient
} from "./chunk-NDTMUZAB.js";
import {
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-GW6N2EK3.js";

// src/app/services/reservation.service.ts
var ReservationService = class _ReservationService {
  http;
  apiUrl = `${API_BASE_URL}/rentals`;
  reservation;
  constructor(http) {
    this.http = http;
  }
  setReservation(reservation) {
    this.reservation = reservation;
  }
  createReservation(reservation, customerId) {
    const payload = {
      carId: reservation.car.id,
      customerId,
      startDate: reservation.startDate,
      endDate: reservation.endDate
    };
    return this.http.post(this.apiUrl, payload).pipe(tap((created) => {
      this.reservation = __spreadProps(__spreadValues({}, reservation), {
        totalPrice: created.totalPrice ?? reservation.totalPrice
      });
    }));
  }
  getReservation() {
    return this.reservation;
  }
  static \u0275fac = function ReservationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReservationService, factory: _ReservationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReservationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ReservationService
};
//# sourceMappingURL=chunk-355ZDL24.js.map
