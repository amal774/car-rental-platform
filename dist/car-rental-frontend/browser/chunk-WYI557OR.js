import {
  CarCardComponent
} from "./chunk-KXIJ52A5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-TMWNK65X.js";
import {
  CarService
} from "./chunk-U7QDOMU7.js";
import {
  Router,
  RouterLink
} from "./chunk-FMAUA3CS.js";
import "./chunk-NDTMUZAB.js";
import "./chunk-7LYVZ2VI.js";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-GW6N2EK3.js";

// src/app/components/search-bar/search-bar.component.ts
var SearchBarComponent = class _SearchBarComponent {
  term = "";
  search = new EventEmitter();
  submitSearch() {
    this.search.emit(this.term);
  }
  static \u0275fac = function SearchBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchBarComponent, selectors: [["app-search-bar"]], outputs: { search: "search" }, decls: 4, vars: 1, consts: [[1, "search", 3, "ngSubmit"], ["name", "search", "placeholder", "Rechercher une voiture...", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn"], [1, "fa-solid", "fa-magnifying-glass"]], template: function SearchBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("ngSubmit", function SearchBarComponent_Template_form_ngSubmit_0_listener() {
        return ctx.submitSearch();
      });
      \u0275\u0275elementStart(1, "input", 1);
      \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.term, $event) || (ctx.term = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(2, "button", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.term);
      \u0275\u0275control();
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n.search[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  background: white;\n  padding: 12px;\n  border-radius: 18px;\n  box-shadow: 0 14px 35px rgba(0, 0, 0, .12);\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n  border: 0;\n  outline: none;\n}\n/*# sourceMappingURL=search-bar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchBarComponent, [{
    type: Component,
    args: [{ selector: "app-search-bar", standalone: true, imports: [FormsModule], template: '<form class="search" (ngSubmit)="submitSearch()">\r\n\r\n    <input\r\n            name="search"\r\n            [(ngModel)]="term"\r\n            placeholder="Rechercher une voiture...">\r\n\r\n    <button class="btn" type="submit">\r\n        <i class="fa-solid fa-magnifying-glass"></i>\r\n    </button>\r\n\r\n</form>', styles: ["/* src/app/components/search-bar/search-bar.component.css */\n.search {\n  display: flex;\n  gap: 10px;\n  background: white;\n  padding: 12px;\n  border-radius: 18px;\n  box-shadow: 0 14px 35px rgba(0, 0, 0, .12);\n}\n.search input {\n  flex: 1;\n  margin: 0;\n  border: 0;\n  outline: none;\n}\n/*# sourceMappingURL=search-bar.component.css.map */\n"] }]
  }], null, { search: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchBarComponent, { className: "SearchBarComponent", filePath: "src/app/components/search-bar/search-bar.component.ts", lineNumber: 11 });
})();

// src/app/pages/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function HomeComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-car-card", 6);
  }
  if (rf & 2) {
    const car_r1 = ctx.$implicit;
    \u0275\u0275property("car", car_r1);
  }
}
var HomeComponent = class _HomeComponent {
  carService;
  router;
  cdr;
  term = "";
  popularCars = [];
  constructor(carService, router, cdr) {
    this.carService = carService;
    this.router = router;
    this.cdr = cdr;
    this.carService.getCars().subscribe((cars) => {
      this.popularCars = cars.slice(0, 3);
      this.cdr.detectChanges();
    });
  }
  searchCars(term) {
    const search = term.trim();
    this.router.navigate(["/cars"], {
      queryParams: {
        search
      }
    });
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(CarService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 28, vars: 0, consts: [[1, "hero"], [1, "container", "hero-content"], [3, "search"], ["routerLink", "/cars", 1, "btn", "secondary"], [1, "container", "page"], [1, "grid"], [3, "car"], [1, "container", "benefits"], [1, "fa-solid", "fa-shield-halved"], [1, "fa-solid", "fa-clock"], [1, "fa-solid", "fa-headset"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, " Louez la voiture id\xE9ale en quelques clics ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, " Des v\xE9hicules modernes, disponibles et adapt\xE9s \xE0 tous vos trajets. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "app-search-bar", 2);
      \u0275\u0275listener("search", function HomeComponent_Template_app_search_bar_search_6_listener($event) {
        return ctx.searchCars($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 3);
      \u0275\u0275text(8, " Explorer les voitures ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "section", 4)(10, "h2");
      \u0275\u0275text(11, "Voitures populaires");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 5);
      \u0275\u0275repeaterCreate(13, HomeComponent_For_14_Template, 1, 1, "app-car-card", 6, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "section", 7)(16, "div");
      \u0275\u0275element(17, "i", 8);
      \u0275\u0275elementStart(18, "h3");
      \u0275\u0275text(19, "Assurance incluse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div");
      \u0275\u0275element(21, "i", 9);
      \u0275\u0275elementStart(22, "h3");
      \u0275\u0275text(23, "R\xE9servation rapide");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div");
      \u0275\u0275element(25, "i", 10);
      \u0275\u0275elementStart(26, "h3");
      \u0275\u0275text(27, "Support 24/7");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.popularCars);
    }
  }, dependencies: [RouterLink, CarCardComponent, SearchBarComponent], styles: ["\n.hero[_ngcontent-%COMP%] {\n  min-height: 620px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, .72),\n      rgba(0, 0, 0, .15)),\n    url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600) center/cover;\n  color: white;\n  display: flex;\n  align-items: center;\n}\n.hero-content[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 55px;\n  line-height: 1.05;\n  margin: 0 0 18px;\n}\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 24px;\n}\n.hero[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 22px;\n}\n.benefits[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 22px;\n}\n.benefits[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 22px;\n  padding: 28px;\n  text-align: center;\n  box-shadow: 0 14px 40px rgba(15, 23, 42, .08);\n}\n.benefits[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 34px;\n  color: #0d6efd;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [RouterLink, CarCardComponent, SearchBarComponent], template: '<section class="hero">\r\n\r\n    <div class="container hero-content">\r\n\r\n        <h1>\r\n            Louez la voiture id\xE9ale en quelques clics\r\n        </h1>\r\n\r\n        <p>\r\n            Des v\xE9hicules modernes, disponibles et adapt\xE9s \xE0 tous vos trajets.\r\n        </p>\r\n\r\n        <app-search-bar\r\n                (search)="searchCars($event)">\r\n        </app-search-bar>\r\n\r\n        <a routerLink="/cars" class="btn secondary">\r\n            Explorer les voitures\r\n        </a>\r\n\r\n    </div>\r\n\r\n</section>\r\n\r\n<section class="container page">\r\n\r\n    <h2>Voitures populaires</h2>\r\n\r\n    <div class="grid">\r\n\r\n        @for(car of popularCars; track car.id){\r\n        <app-car-card [car]="car"></app-car-card>\r\n        }\r\n\r\n    </div>\r\n\r\n</section>\r\n\r\n<section class="container benefits">\r\n\r\n    <div>\r\n        <i class="fa-solid fa-shield-halved"></i>\r\n        <h3>Assurance incluse</h3>\r\n    </div>\r\n\r\n    <div>\r\n        <i class="fa-solid fa-clock"></i>\r\n        <h3>R\xE9servation rapide</h3>\r\n    </div>\r\n\r\n    <div>\r\n        <i class="fa-solid fa-headset"></i>\r\n        <h3>Support 24/7</h3>\r\n    </div>\r\n\r\n</section>', styles: ["/* src/app/pages/home/home.component.css */\n.hero {\n  min-height: 620px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, .72),\n      rgba(0, 0, 0, .15)),\n    url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600) center/cover;\n  color: white;\n  display: flex;\n  align-items: center;\n}\n.hero-content {\n  max-width: 720px;\n}\n.hero h1 {\n  font-size: 55px;\n  line-height: 1.05;\n  margin: 0 0 18px;\n}\n.hero p {\n  font-size: 20px;\n  margin-bottom: 24px;\n}\n.hero .btn {\n  display: inline-block;\n  margin-top: 22px;\n}\n.benefits {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 22px;\n}\n.benefits div {\n  background: white;\n  border-radius: 22px;\n  padding: 28px;\n  text-align: center;\n  box-shadow: 0 14px 40px rgba(15, 23, 42, .08);\n}\n.benefits i {\n  font-size: 34px;\n  color: #0d6efd;\n}\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], () => [{ type: CarService }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 15 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-WYI557OR.js.map
