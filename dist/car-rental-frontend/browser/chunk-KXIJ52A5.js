import {
  RouterLink
} from "./chunk-FMAUA3CS.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-GW6N2EK3.js";

// src/app/components/car-card/car-card.component.ts
var _c0 = (a0) => ["/cars", a0];
var CarCardComponent = class _CarCardComponent {
  car;
  static \u0275fac = function CarCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CarCardComponent, selectors: [["app-car-card"]], inputs: { car: "car" }, decls: 16, vars: 13, consts: [[1, "card", "car"], [3, "src", "alt"], [1, "body"], [1, "badge"], [1, "fa-solid", "fa-gas-pump"], [1, "fa-solid", "fa-gears"], [1, "price"], [1, "btn", 3, "routerLink"]], template: function CarCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h3");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275element(8, "i", 4);
      \u0275\u0275text(9);
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 6);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 7);
      \u0275\u0275text(15, "Voir d\xE9tails");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("src", ctx.car.image, \u0275\u0275sanitizeUrl)("alt", ctx.car.brand + " " + ctx.car.model);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("off", !ctx.car.available);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.car.available ? "Disponible" : "Non disponible");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.car.brand, " ", ctx.car.model);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.car.fuel, " \xB7 ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.car.transmission);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.car.pricePerDay, " TND / jour");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, ctx.car.id));
    }
  }, dependencies: [RouterLink], styles: ["\n.car[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 190px;\n  object-fit: cover;\n}\n.body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\nh3[_ngcontent-%COMP%] {\n  margin: 12px 0 8px;\n}\n.price[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 900;\n  margin: 18px 0;\n  color: #0d6efd;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=car-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarCardComponent, [{
    type: Component,
    args: [{ selector: "app-car-card", standalone: true, imports: [RouterLink], template: `<div class="card car"><img [src]="car.image" [alt]="car.brand+' '+car.model"><div class="body"><span class="badge" [class.off]="!car.available">{{car.available?'Disponible':'Non disponible'}}</span><h3>{{car.brand}} {{car.model}}</h3><p><i class="fa-solid fa-gas-pump"></i> {{car.fuel}} \xB7 <i class="fa-solid fa-gears"></i> {{car.transmission}}</p><div class="price">{{car.pricePerDay}} TND / jour</div><a [routerLink]="['/cars',car.id]" class="btn">Voir d\xE9tails</a></div></div>`, styles: ["/* angular:styles/component:css;2ce4c087e82958b12aa9b975a63ccc88c0b9e20638a4a9e0f0bb4947df6ccab4;C:/Users/meche/Downloads/car-rental-frontend/src/app/components/car-card/car-card.component.ts */\n.car img {\n  width: 100%;\n  height: 190px;\n  object-fit: cover;\n}\n.body {\n  padding: 20px;\n}\nh3 {\n  margin: 12px 0 8px;\n}\n.price {\n  font-size: 20px;\n  font-weight: 900;\n  margin: 18px 0;\n  color: #0d6efd;\n}\n.btn {\n  display: inline-block;\n}\n/*# sourceMappingURL=car-card.component.css.map */\n"] }]
  }], null, { car: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CarCardComponent, { className: "CarCardComponent", filePath: "src/app/components/car-card/car-card.component.ts", lineNumber: 5 });
})();

export {
  CarCardComponent
};
//# sourceMappingURL=chunk-KXIJ52A5.js.map
