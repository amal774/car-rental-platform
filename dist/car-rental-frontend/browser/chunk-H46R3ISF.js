import {
  CarService
} from "./chunk-U7QDOMU7.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-FMAUA3CS.js";
import "./chunk-NDTMUZAB.js";
import "./chunk-7LYVZ2VI.js";
import {
  ChangeDetectorRef,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-GW6N2EK3.js";

// src/app/pages/car-details/car-details.component.ts
var _c0 = (a0) => ["/reservation", a0];
function CarDetailsComponent_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const img_r1 = ctx.$implicit;
    \u0275\u0275property("src", img_r1, \u0275\u0275sanitizeUrl);
  }
}
function CarDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div");
    \u0275\u0275element(2, "img", 1);
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275repeaterCreate(4, CarDetailsComponent_Conditional_0_For_5_Template, 1, 1, "img", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "span", 5);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul")(14, "li");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "h2");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 6);
    \u0275\u0275text(23, " R\xE9server ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.car.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.car.gallery);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("off", !ctx_r1.car.available);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.car.available ? "Disponible" : "Non disponible", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.car.brand, " ", ctx_r1.car.model);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.car.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Transmission : ", ctx_r1.car.transmission);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Carburant : ", ctx_r1.car.fuel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Places : ", ctx_r1.car.seats);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.car.pricePerDay, " TND / jour");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, ctx_r1.car.id));
  }
}
var CarDetailsComponent = class _CarDetailsComponent {
  route;
  carService;
  cdr;
  car;
  constructor(route, carService, cdr) {
    this.route = route;
    this.carService = carService;
    this.cdr = cdr;
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.carService.getCarById(id).subscribe((car) => {
      this.car = car;
      this.cdr.detectChanges();
    });
  }
  static \u0275fac = function CarDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CarService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CarDetailsComponent, selectors: [["app-car-details"]], decls: 1, vars: 1, consts: [[1, "container", "page", "detail"], [1, "main", 3, "src"], [1, "gallery"], [3, "src"], [1, "card", "info"], [1, "badge"], [1, "btn", 3, "routerLink"]], template: function CarDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CarDetailsComponent_Conditional_0_Template, 24, 14, "section", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.car ? 0 : -1);
    }
  }, dependencies: [RouterLink], styles: ["\n.detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr .8fr;\n  gap: 30px;\n}\n.main[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 430px;\n  object-fit: cover;\n  border-radius: 24px;\n}\n.gallery[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n}\n.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 14px;\n}\n.info[_ngcontent-%COMP%] {\n  padding: 30px;\n}\nli[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\nh2[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n@media (max-width: 850px) {\n  .detail[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .main[_ngcontent-%COMP%] {\n    height: 280px;\n  }\n}\n/*# sourceMappingURL=car-details.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-car-details", standalone: true, imports: [RouterLink], template: `@if(car){\r
<section class="container page detail">\r
  <div>\r
    <img class="main" [src]="car.image">\r
\r
    <div class="gallery">\r
      @for(img of car.gallery; track img){\r
      <img [src]="img">\r
      }\r
    </div>\r
  </div>\r
\r
  <div class="card info">\r
      <span class="badge" [class.off]="!car.available">\r
        {{ car.available ? 'Disponible' : 'Non disponible' }}\r
      </span>\r
\r
    <h1>{{ car.brand }} {{ car.model }}</h1>\r
    <p>{{ car.description }}</p>\r
\r
    <ul>\r
      <li>Transmission : {{ car.transmission }}</li>\r
      <li>Carburant : {{ car.fuel }}</li>\r
      <li>Places : {{ car.seats }}</li>\r
    </ul>\r
\r
    <h2>{{ car.pricePerDay }} TND / jour</h2>\r
\r
    <a [routerLink]="['/reservation', car.id]" class="btn">\r
      R\xE9server\r
    </a>\r
  </div>\r
</section>\r
}`, styles: ["/* src/app/pages/car-details/car-details.component.css */\n.detail {\n  display: grid;\n  grid-template-columns: 1.2fr .8fr;\n  gap: 30px;\n}\n.main {\n  width: 100%;\n  height: 430px;\n  object-fit: cover;\n  border-radius: 24px;\n}\n.gallery {\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n}\n.gallery img {\n  width: 110px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 14px;\n}\n.info {\n  padding: 30px;\n}\nli {\n  margin: 12px 0;\n}\nh2 {\n  color: #0d6efd;\n}\n@media (max-width: 850px) {\n  .detail {\n    grid-template-columns: 1fr;\n  }\n  .main {\n    height: 280px;\n  }\n}\n/*# sourceMappingURL=car-details.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: CarService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CarDetailsComponent, { className: "CarDetailsComponent", filePath: "src/app/pages/car-details/car-details.component.ts", lineNumber: 13 });
})();
export {
  CarDetailsComponent
};
//# sourceMappingURL=chunk-H46R3ISF.js.map
