import {
  ReservationService
} from "./chunk-355ZDL24.js";
import {
  NotificationComponent
} from "./chunk-N2ZE6L7E.js";
import {
  AuthService
} from "./chunk-LB64IYRW.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-TMWNK65X.js";
import {
  CarService
} from "./chunk-U7QDOMU7.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-FMAUA3CS.js";
import "./chunk-NDTMUZAB.js";
import "./chunk-7LYVZ2VI.js";
import {
  ChangeDetectorRef,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-GW6N2EK3.js";

// src/app/pages/reservation/reservation.component.ts
function ReservationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 0)(1, "h1");
    \u0275\u0275text(2, "R\xE9servation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label");
    \u0275\u0275text(6, "Date d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 1);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "label");
    \u0275\u0275text(9, "Date fin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 2);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(11, "div", 3)(12, "p");
    \u0275\u0275text(13, "Prix/jour : ");
    \u0275\u0275elementStart(14, "b");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17, "Total : ");
    \u0275\u0275elementStart(18, "b");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 4);
    \u0275\u0275listener("click", function ReservationComponent_Conditional_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirm());
    });
    \u0275\u0275text(21, " Confirmer ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "app-notification", 5);
    \u0275\u0275listener("closed", function ReservationComponent_Conditional_0_Template_app_notification_closed_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showNotification = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.car.brand, " ", ctx_r1.car.model);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.car.pricePerDay, " TND");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.total(), " TND");
    \u0275\u0275advance(3);
    \u0275\u0275property("visible", ctx_r1.showNotification)("title", ctx_r1.notificationTitle)("message", ctx_r1.notificationMessage);
  }
}
var ReservationComponent = class _ReservationComponent {
  fb;
  route;
  router;
  carService;
  authService;
  reservationService;
  cdr;
  car;
  form;
  showNotification = false;
  notificationTitle = "";
  notificationMessage = "";
  constructor(fb, route, router, carService, authService, reservationService, cdr) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.carService = carService;
    this.authService = authService;
    this.reservationService = reservationService;
    this.cdr = cdr;
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(["/login"]);
      return;
    }
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.carService.getCarById(id).subscribe((car) => {
      this.car = car;
      this.cdr.detectChanges();
    });
    this.form = this.fb.group({
      start: ["", Validators.required],
      end: ["", Validators.required]
    });
  }
  openNotification(title, message) {
    this.notificationTitle = title;
    this.notificationMessage = message;
    this.showNotification = true;
    this.cdr.detectChanges();
  }
  total() {
    return this.getDays() * (this.car?.pricePerDay || 0);
  }
  getDays() {
    const start = new Date(this.form.value.start || "");
    const end = new Date(this.form.value.end || "");
    return Math.ceil((+end - +start) / (1e3 * 60 * 60 * 24));
  }
  confirm() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.openNotification("Formulaire incomplet", "Veuillez remplir les deux dates.");
      return;
    }
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(this.form.value.start || "");
    const end = new Date(this.form.value.end || "");
    if (start < today) {
      this.openNotification("Date invalide", "La date de d\xE9part ne peut pas \xEAtre dans le pass\xE9.");
      return;
    }
    if (end <= start) {
      this.openNotification("Date invalide", "La date de retour doit \xEAtre sup\xE9rieure \xE0 la date de d\xE9part.");
      return;
    }
    if (!this.car)
      return;
    const reservation = {
      car: this.car,
      startDate: this.form.value.start || "",
      endDate: this.form.value.end || "",
      days: this.getDays(),
      totalPrice: this.total()
    };
    const customerId = this.authService.getUser()?.id || 1;
    this.reservationService.createReservation(reservation, customerId).subscribe({
      next: () => {
        this.router.navigate(["/reservation-summary"]);
      },
      error: () => {
        this.openNotification("Reservation impossible", "Cette voiture est deja reservee pour cette periode. Choisissez une autre date.");
      }
    });
  }
  static \u0275fac = function ReservationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservationComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CarService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ReservationService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservationComponent, selectors: [["app-reservation"]], decls: 1, vars: 1, consts: [[1, "form", 3, "formGroup"], ["type", "date", "formControlName", "start"], ["type", "date", "formControlName", "end"], [1, "card", "reservation-summary"], ["type", "button", 1, "btn", 3, "click"], [3, "closed", "visible", "title", "message"]], template: function ReservationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ReservationComponent_Conditional_0_Template, 23, 8);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.car ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NotificationComponent], styles: ["\n.form[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 50px auto;\n}\n.form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  color: #0d6efd;\n}\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 8px;\n  font-weight: 600;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #d8dee8;\n  border-radius: 12px;\n}\n.reservation-summary[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin: 20px 0;\n}\n.reservation-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=reservation.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReservationComponent, [{
    type: Component,
    args: [{ selector: "app-reservation", standalone: true, imports: [ReactiveFormsModule, NotificationComponent], template: '@if(car){\r\n\r\n<form class="form" [formGroup]="form">\r\n    <h1>R\xE9servation</h1>\r\n\r\n    <h3>{{ car.brand }} {{ car.model }}</h3>\r\n\r\n    <label>Date d\xE9but</label>\r\n    <input type="date" formControlName="start">\r\n\r\n    <label>Date fin</label>\r\n    <input type="date" formControlName="end">\r\n\r\n    <div class="card reservation-summary">\r\n        <p>Prix/jour : <b>{{ car.pricePerDay }} TND</b></p>\r\n        <p>Total : <b>{{ total() }} TND</b></p>\r\n    </div>\r\n\r\n    <button type="button" class="btn" (click)="confirm()">\r\n        Confirmer\r\n    </button>\r\n</form>\r\n\r\n<app-notification\r\n        [visible]="showNotification"\r\n        [title]="notificationTitle"\r\n        [message]="notificationMessage"\r\n        (closed)="showNotification = false">\r\n</app-notification>\r\n}', styles: ["/* src/app/pages/reservation/reservation.component.css */\n.form {\n  max-width: 600px;\n  margin: 50px auto;\n}\n.form h1 {\n  margin-bottom: 10px;\n}\n.form h3 {\n  margin-bottom: 25px;\n  color: #0d6efd;\n}\n.form label {\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 8px;\n  font-weight: 600;\n}\n.form input {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #d8dee8;\n  border-radius: 12px;\n}\n.reservation-summary {\n  padding: 20px;\n  margin: 20px 0;\n}\n.reservation-summary p {\n  margin: 10px 0;\n}\n.btn {\n  width: 100%;\n}\n/*# sourceMappingURL=reservation.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: CarService }, { type: AuthService }, { type: ReservationService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservationComponent, { className: "ReservationComponent", filePath: "src/app/pages/reservation/reservation.component.ts", lineNumber: 19 });
})();
export {
  ReservationComponent
};
//# sourceMappingURL=chunk-W26UGDEZ.js.map
