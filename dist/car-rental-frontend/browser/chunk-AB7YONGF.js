import {
  ReservationService
} from "./chunk-355ZDL24.js";
import {
  RouterLink
} from "./chunk-FMAUA3CS.js";
import "./chunk-NDTMUZAB.js";
import "./chunk-7LYVZ2VI.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-GW6N2EK3.js";

// src/app/pages/reservation-summary/reservation-summary.component.ts
function ReservationSummaryComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h1");
    \u0275\u0275text(2, "R\xE9servation confirm\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 2);
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Date d\xE9part : ");
    \u0275\u0275elementStart(8, "b");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Date retour : ");
    \u0275\u0275elementStart(12, "b");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15, "Nombre de jours : ");
    \u0275\u0275elementStart(16, "b");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19, "Prix total : ");
    \u0275\u0275elementStart(20, "b");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "a", 3);
    \u0275\u0275text(23, " Retour aux voitures ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.reservation.car.image, \u0275\u0275sanitizeUrl)("alt", ctx_r0.reservation.car.model);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.reservation.car.brand, " ", ctx_r0.reservation.car.model);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.reservation.startDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.reservation.endDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.reservation.days);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.reservation.totalPrice, " TND");
  }
}
function ReservationSummaryComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h1");
    \u0275\u0275text(2, "Aucune r\xE9servation trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 3);
    \u0275\u0275text(4, " Voir les voitures ");
    \u0275\u0275elementEnd()();
  }
}
var ReservationSummaryComponent = class _ReservationSummaryComponent {
  reservationService;
  reservation;
  constructor(reservationService) {
    this.reservationService = reservationService;
    this.reservation = this.reservationService.getReservation();
  }
  static \u0275fac = function ReservationSummaryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservationSummaryComponent)(\u0275\u0275directiveInject(ReservationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservationSummaryComponent, selectors: [["app-reservation-summary"]], decls: 3, vars: 1, consts: [[1, "container", "page"], [1, "card", "summary-card"], [3, "src", "alt"], ["routerLink", "/cars", 1, "btn"]], template: function ReservationSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275conditionalCreate(1, ReservationSummaryComponent_Conditional_1_Template, 24, 8, "div", 1)(2, ReservationSummaryComponent_Conditional_2_Template, 5, 0, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.reservation ? 1 : 2);
    }
  }, dependencies: [RouterLink], styles: ["\n.summary-card[_ngcontent-%COMP%] {\n  max-width: 650px;\n  margin: auto;\n  padding: 30px;\n  text-align: center;\n}\n.summary-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 280px;\n  object-fit: cover;\n  border-radius: 18px;\n  margin: 20px 0;\n}\n.summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin: 12px 0;\n}\n/*# sourceMappingURL=reservation-summary.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReservationSummaryComponent, [{
    type: Component,
    args: [{ selector: "app-reservation-summary", standalone: true, imports: [RouterLink], template: '<section class="container page">\r\n\r\n    @if(reservation){\r\n    <div class="card summary-card">\r\n        <h1>R\xE9servation confirm\xE9e</h1>\r\n\r\n        <img [src]="reservation.car.image" [alt]="reservation.car.model">\r\n\r\n        <h2>{{ reservation.car.brand }} {{ reservation.car.model }}</h2>\r\n\r\n        <p>Date d\xE9part : <b>{{ reservation.startDate }}</b></p>\r\n        <p>Date retour : <b>{{ reservation.endDate }}</b></p>\r\n        <p>Nombre de jours : <b>{{ reservation.days }}</b></p>\r\n        <p>Prix total : <b>{{ reservation.totalPrice }} TND</b></p>\r\n\r\n        <a routerLink="/cars" class="btn">\r\n            Retour aux voitures\r\n        </a>\r\n    </div>\r\n    } @else {\r\n    <div class="card summary-card">\r\n        <h1>Aucune r\xE9servation trouv\xE9e</h1>\r\n        <a routerLink="/cars" class="btn">\r\n            Voir les voitures\r\n        </a>\r\n    </div>\r\n    }\r\n\r\n</section>', styles: ["/* src/app/pages/reservation-summary/reservation-summary.component.css */\n.summary-card {\n  max-width: 650px;\n  margin: auto;\n  padding: 30px;\n  text-align: center;\n}\n.summary-card img {\n  width: 100%;\n  height: 280px;\n  object-fit: cover;\n  border-radius: 18px;\n  margin: 20px 0;\n}\n.summary-card p {\n  font-size: 17px;\n  margin: 12px 0;\n}\n/*# sourceMappingURL=reservation-summary.component.css.map */\n"] }]
  }], () => [{ type: ReservationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservationSummaryComponent, { className: "ReservationSummaryComponent", filePath: "src/app/pages/reservation-summary/reservation-summary.component.ts", lineNumber: 13 });
})();
export {
  ReservationSummaryComponent
};
//# sourceMappingURL=chunk-AB7YONGF.js.map
