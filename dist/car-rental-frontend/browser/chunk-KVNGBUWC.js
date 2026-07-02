import {
  CarCardComponent
} from "./chunk-KXIJ52A5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TMWNK65X.js";
import {
  CarService
} from "./chunk-U7QDOMU7.js";
import {
  ActivatedRoute
} from "./chunk-FMAUA3CS.js";
import "./chunk-NDTMUZAB.js";
import "./chunk-7LYVZ2VI.js";
import {
  ChangeDetectorRef,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-GW6N2EK3.js";

// src/app/pages/cars/cars.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CarsComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-car-card", 8);
  }
  if (rf & 2) {
    const car_r1 = ctx.$implicit;
    \u0275\u0275property("car", car_r1);
  }
}
var CarsComponent = class _CarsComponent {
  carService;
  route;
  cdr;
  search = "";
  availability = "all";
  cars = [];
  constructor(carService, route, cdr) {
    this.carService = carService;
    this.route = route;
    this.cdr = cdr;
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.cdr.detectChanges();
    });
    this.route.queryParams.subscribe((params) => {
      this.search = params["search"] || "";
      this.cdr.detectChanges();
    });
  }
  filteredCars() {
    return this.cars.filter((c) => (c.brand + " " + c.model).toLowerCase().includes(this.search.toLowerCase()) && (this.availability === "all" || (this.availability === "available" ? c.available : !c.available)));
  }
  static \u0275fac = function CarsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarsComponent)(\u0275\u0275directiveInject(CarService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CarsComponent, selectors: [["app-cars"]], decls: 15, vars: 2, consts: [[1, "container", "page"], [1, "filters"], ["placeholder", "Marque ou mod\xE8le", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "available"], ["value", "unavailable"], [1, "grid"], [3, "car"]], template: function CarsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "Nos voitures");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function CarsComponent_Template_input_ngModelChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(5, "select", 3);
      \u0275\u0275twoWayListener("ngModelChange", function CarsComponent_Template_select_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.availability, $event) || (ctx.availability = $event);
        return $event;
      });
      \u0275\u0275elementStart(6, "option", 4);
      \u0275\u0275text(7, "Toutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "option", 5);
      \u0275\u0275text(9, "Disponibles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "option", 6);
      \u0275\u0275text(11, "Non disponibles");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7);
      \u0275\u0275repeaterCreate(13, CarsComponent_For_14_Template, 1, 1, "app-car-card", 8, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.availability);
      \u0275\u0275control();
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.filteredCars());
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, CarCardComponent], styles: ["\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 16px;\n  margin: 24px 0;\n}\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 12px;\n  border: 1px solid #d8dee8;\n  border-radius: 12px;\n  font-size: 15px;\n}\n@media (max-width: 700px) {\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=cars.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarsComponent, [{
    type: Component,
    args: [{ selector: "app-cars", standalone: true, imports: [FormsModule, CarCardComponent], template: '<section class="container page">\r\n\r\n    <h1>Nos voitures</h1>\r\n\r\n    <div class="filters">\r\n\r\n        <input\r\n                [(ngModel)]="search"\r\n                placeholder="Marque ou mod\xE8le">\r\n\r\n        <select [(ngModel)]="availability">\r\n            <option value="all">Toutes</option>\r\n            <option value="available">Disponibles</option>\r\n            <option value="unavailable">Non disponibles</option>\r\n        </select>\r\n\r\n    </div>\r\n\r\n    <div class="grid">\r\n\r\n        @for(car of filteredCars(); track car.id){\r\n        <app-car-card [car]="car"></app-car-card>\r\n        }\r\n\r\n    </div>\r\n\r\n</section>', styles: ["/* src/app/pages/cars/cars.component.css */\n.filters {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 16px;\n  margin: 24px 0;\n}\n.filters input,\n.filters select {\n  padding: 12px;\n  border: 1px solid #d8dee8;\n  border-radius: 12px;\n  font-size: 15px;\n}\n@media (max-width: 700px) {\n  .filters {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=cars.component.css.map */\n"] }]
  }], () => [{ type: CarService }, { type: ActivatedRoute }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CarsComponent, { className: "CarsComponent", filePath: "src/app/pages/cars/cars.component.ts", lineNumber: 15 });
})();
export {
  CarsComponent
};
//# sourceMappingURL=chunk-KVNGBUWC.js.map
