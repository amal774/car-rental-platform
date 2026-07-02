import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-TMWNK65X.js";
import {
  CarService
} from "./chunk-U7QDOMU7.js";
import "./chunk-NDTMUZAB.js";
import {
  CommonModule
} from "./chunk-7LYVZ2VI.js";
import {
  ChangeDetectorRef,
  Component,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-GW6N2EK3.js";

// src/app/pages/admin-cars/admin-cars.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminCarsComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "Merci de remplir correctement tous les champs.");
    \u0275\u0275elementEnd();
  }
}
function AdminCarsComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.actionError);
  }
}
function AdminCarsComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.actionSuccess);
  }
}
function AdminCarsComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275elementStart(2, "div")(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 22)(10, "button", 23);
    \u0275\u0275listener("click", function AdminCarsComponent_For_51_Template_button_click_10_listener() {
      const car_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editCar(car_r3));
    });
    \u0275\u0275text(11, "Modifier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 23);
    \u0275\u0275listener("click", function AdminCarsComponent_For_51_Template_button_click_12_listener() {
      const car_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleAvailability(car_r3.id));
    });
    \u0275\u0275text(13, "Disponibilit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 24);
    \u0275\u0275listener("click", function AdminCarsComponent_For_51_Template_button_click_14_listener() {
      const car_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.deleteCar(car_r3.id));
    });
    \u0275\u0275text(15, "Supprimer");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const car_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", car_r3.image, \u0275\u0275sanitizeUrl)("alt", car_r3.brand);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", car_r3.brand, " ", car_r3.model);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", car_r3.pricePerDay, " DT / jour");
    \u0275\u0275advance();
    \u0275\u0275classProp("available", car_r3.available)("unavailable", !car_r3.available);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", car_r3.available ? "Disponible" : "Indisponible", " ");
  }
}
var AdminCarsComponent = class _AdminCarsComponent {
  fb;
  carService;
  cdr;
  cars = [];
  editingCarId = null;
  submitted = false;
  actionError = "";
  actionSuccess = "";
  form;
  constructor(fb, carService, cdr) {
    this.fb = fb;
    this.carService = carService;
    this.cdr = cdr;
    this.refreshList();
    this.form = this.fb.group({
      brand: ["", Validators.required],
      model: ["", Validators.required],
      pricePerDay: [0, [Validators.required, Validators.min(1)]],
      available: [true],
      image: ["", Validators.required],
      transmission: ["", Validators.required],
      fuel: ["", Validators.required],
      seats: [5, [Validators.required, Validators.min(2)]],
      description: ["", Validators.required]
    });
  }
  saveCar() {
    this.submitted = true;
    this.actionError = "";
    this.actionSuccess = "";
    if (this.form.invalid)
      return;
    const carData = __spreadProps(__spreadValues({}, this.form.getRawValue()), {
      gallery: [this.form.value.image || ""]
    });
    if (this.editingCarId) {
      this.carService.updateCar(this.editingCarId, carData).subscribe({
        next: () => {
          this.actionSuccess = "Voiture modifiee avec succes.";
          this.cancelEdit();
          this.refreshList();
          this.cdr.detectChanges();
        },
        error: () => {
          this.actionError = "Impossible de modifier la voiture. Verifiez que car-service et api-gateway sont demarres.";
        }
      });
    } else {
      this.carService.addCar(carData).subscribe({
        next: () => {
          this.actionSuccess = "Voiture ajoutee avec succes.";
          this.cancelEdit();
          this.refreshList();
          this.cdr.detectChanges();
        },
        error: () => {
          this.actionError = "Impossible d ajouter la voiture. Verifiez que car-service et api-gateway sont demarres.";
        }
      });
    }
  }
  editCar(car) {
    this.editingCarId = car.id;
    this.form.patchValue(car);
    this.cdr.detectChanges();
  }
  deleteCar(id) {
    if (confirm("Voulez-vous vraiment supprimer cette voiture ?")) {
      this.carService.deleteCar(id).subscribe({
        next: () => {
          this.actionSuccess = "Voiture supprimee avec succes.";
          this.refreshList();
          this.cdr.detectChanges();
        },
        error: () => {
          this.actionError = "Impossible de supprimer la voiture.";
        }
      });
    }
  }
  toggleAvailability(id) {
    const current = this.cars.find((car) => car.id === id);
    if (!current)
      return;
    const toggled = __spreadProps(__spreadValues({}, current), { available: !current.available });
    this.cars = this.cars.map((item) => item.id === id ? toggled : item);
    this.cdr.detectChanges();
    this.carService.updateCar(id, toggled).subscribe({
      next: (car) => {
        this.cars = this.cars.map((item) => item.id === id ? car : item);
        this.cdr.detectChanges();
      },
      error: () => {
        this.cars = this.cars.map((item) => item.id === id ? current : item);
        this.actionError = "Impossible de changer la disponibilite.";
        this.cdr.detectChanges();
      }
    });
  }
  cancelEdit() {
    this.editingCarId = null;
    this.submitted = false;
    this.form.reset({
      brand: "",
      model: "",
      pricePerDay: 0,
      available: true,
      image: "",
      transmission: "",
      fuel: "",
      seats: 5,
      description: ""
    });
  }
  refreshList() {
    this.carService.getCars().subscribe({
      next: (cars) => {
        this.cars = [...cars];
        this.cdr.detectChanges();
      },
      error: () => {
        this.actionError = "Impossible de charger les voitures. Verifiez que car-service est demarre.";
        this.cdr.detectChanges();
      }
    });
  }
  static \u0275fac = function AdminCarsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminCarsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CarService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminCarsComponent, selectors: [["app-admin-cars"]], decls: 52, vars: 6, consts: [[1, "container", "admin-page"], [1, "admin-header"], [1, "eyebrow"], [1, "admin-grid"], [1, "admin-form", 3, "ngSubmit", "formGroup"], [1, "form-row"], ["formControlName", "brand"], ["formControlName", "model"], ["type", "number", "formControlName", "pricePerDay"], ["type", "number", "formControlName", "seats"], ["formControlName", "transmission"], ["formControlName", "fuel"], ["formControlName", "image"], ["formControlName", "description", "rows", "4"], [1, "check"], ["type", "checkbox", "formControlName", "available"], [1, "error"], [1, "success"], ["type", "submit", 1, "btn"], [1, "admin-list"], [1, "admin-card"], [3, "src", "alt"], [1, "admin-card-actions"], [3, "click"], [1, "danger", 3, "click"]], template: function AdminCarsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3, "Espace administrateur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Gestion des voitures");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Ajouter, modifier, supprimer et changer la disponibilit\xE9 des voitures.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "form", 4);
      \u0275\u0275listener("ngSubmit", function AdminCarsComponent_Template_form_ngSubmit_9_listener() {
        return ctx.saveCar();
      });
      \u0275\u0275elementStart(10, "h2");
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 5)(13, "label");
      \u0275\u0275text(14, "Marque ");
      \u0275\u0275element(15, "input", 6);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "label");
      \u0275\u0275text(17, "Mod\xE8le ");
      \u0275\u0275element(18, "input", 7);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 5)(20, "label");
      \u0275\u0275text(21, "Prix / jour ");
      \u0275\u0275element(22, "input", 8);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "label");
      \u0275\u0275text(24, "Places ");
      \u0275\u0275element(25, "input", 9);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 5)(27, "label");
      \u0275\u0275text(28, "Transmission ");
      \u0275\u0275element(29, "input", 10);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "label");
      \u0275\u0275text(31, "Carburant ");
      \u0275\u0275element(32, "input", 11);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "label");
      \u0275\u0275text(34, "Image ");
      \u0275\u0275element(35, "input", 12);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "label");
      \u0275\u0275text(37, "Description ");
      \u0275\u0275element(38, "textarea", 13);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "label", 14);
      \u0275\u0275element(40, "input", 15);
      \u0275\u0275controlCreate();
      \u0275\u0275text(41, " Disponible ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(42, AdminCarsComponent_Conditional_42_Template, 2, 0, "p", 16);
      \u0275\u0275conditionalCreate(43, AdminCarsComponent_Conditional_43_Template, 2, 1, "p", 16);
      \u0275\u0275conditionalCreate(44, AdminCarsComponent_Conditional_44_Template, 2, 1, "p", 17);
      \u0275\u0275elementStart(45, "button", 18);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 19)(48, "h2");
      \u0275\u0275text(49, "Liste des voitures");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(50, AdminCarsComponent_For_51_Template, 16, 10, "div", 20, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.editingCarId ? "Modifier voiture" : "Ajouter voiture");
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.form.invalid && ctx.submitted ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.actionError ? 43 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.actionSuccess ? 44 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.editingCarId ? "Enregistrer" : "Ajouter", " ");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.cars);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n.admin-page[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n.admin-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0d6efd,\n      #071a3d);\n  color: white;\n  padding: 32px;\n  border-radius: 24px;\n  margin-bottom: 28px;\n}\n.admin-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 420px 1fr;\n  gap: 24px;\n}\n.admin-form[_ngcontent-%COMP%], \n.admin-list[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 22px;\n  padding: 24px;\n  box-shadow: 0 12px 35px rgba(0, 0, 0, .08);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-weight: 800;\n  margin-bottom: 14px;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  border: 1px solid #d8dee8;\n  border-radius: 12px;\n  padding: 12px;\n}\n.admin-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 1fr 150px;\n  gap: 16px;\n  align-items: center;\n  border: 1px solid #edf2f7;\n  border-radius: 18px;\n  padding: 14px;\n  margin-bottom: 14px;\n}\n.admin-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 86px;\n  object-fit: cover;\n  border-radius: 14px;\n}\n.available[_ngcontent-%COMP%] {\n  color: #138a43;\n  font-weight: 900;\n}\n.unavailable[_ngcontent-%COMP%] {\n  color: #c92121;\n  font-weight: 900;\n}\n.admin-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.danger[_ngcontent-%COMP%] {\n  background: #ffefef;\n  color: #c92121;\n}\n.error[_ngcontent-%COMP%] {\n  color: #c92121;\n  font-weight: 800;\n}\n.success[_ngcontent-%COMP%] {\n  color: #138a43;\n  font-weight: 800;\n}\n@media (max-width: 900px) {\n  .admin-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .admin-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .admin-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 180px;\n  }\n}\n/*# sourceMappingURL=admin-cars.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminCarsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-cars", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<section class="container admin-page">\r
  <div class="admin-header">\r
    <p class="eyebrow">Espace administrateur</p>\r
    <h1>Gestion des voitures</h1>\r
    <p>Ajouter, modifier, supprimer et changer la disponibilit\xE9 des voitures.</p>\r
  </div>\r
\r
  <div class="admin-grid">\r
    <form class="admin-form" [formGroup]="form" (ngSubmit)="saveCar()">\r
      <h2>{{ editingCarId ? 'Modifier voiture' : 'Ajouter voiture' }}</h2>\r
\r
      <div class="form-row">\r
        <label>Marque <input formControlName="brand"></label>\r
        <label>Mod\xE8le <input formControlName="model"></label>\r
      </div>\r
\r
      <div class="form-row">\r
        <label>Prix / jour <input type="number" formControlName="pricePerDay"></label>\r
        <label>Places <input type="number" formControlName="seats"></label>\r
      </div>\r
\r
      <div class="form-row">\r
        <label>Transmission <input formControlName="transmission"></label>\r
        <label>Carburant <input formControlName="fuel"></label>\r
      </div>\r
\r
      <label>Image <input formControlName="image"></label>\r
      <label>Description <textarea formControlName="description" rows="4"></textarea></label>\r
\r
      <label class="check">\r
        <input type="checkbox" formControlName="available">\r
        Disponible\r
      </label>\r
\r
      @if(form.invalid && submitted){
      <p class="error">Merci de remplir correctement tous les champs.</p>
      }

      @if(actionError){
      <p class="error">{{ actionError }}</p>
      }

      @if(actionSuccess){
      <p class="success">{{ actionSuccess }}</p>
      }

      <button class="btn" type="submit">
        {{ editingCarId ? 'Enregistrer' : 'Ajouter' }}\r
      </button>\r
    </form>\r
\r
    <div class="admin-list">\r
      <h2>Liste des voitures</h2>\r
\r
      @for(car of cars; track car.id){\r
      <div class="admin-card">\r
        <img [src]="car.image" [alt]="car.brand">\r
\r
        <div>\r
          <h3>{{ car.brand }} {{ car.model }}</h3>\r
          <p>{{ car.pricePerDay }} DT / jour</p>\r
          <span [class.available]="car.available" [class.unavailable]="!car.available">\r
              {{ car.available ? 'Disponible' : 'Indisponible' }}\r
            </span>\r
        </div>\r
\r
        <div class="admin-card-actions">\r
          <button (click)="editCar(car)">Modifier</button>\r
          <button (click)="toggleAvailability(car.id)">Disponibilit\xE9</button>\r
          <button class="danger" (click)="deleteCar(car.id)">Supprimer</button>\r
        </div>\r
      </div>\r
      }\r
    </div>\r
  </div>\r
</section>
`, styles: ["/* src/app/pages/admin-cars/admin-cars.component.css */\n.admin-page {\n  padding: 50px 0;\n}\n.admin-header {\n  background:\n    linear-gradient(\n      135deg,\n      #0d6efd,\n      #071a3d);\n  color: white;\n  padding: 32px;\n  border-radius: 24px;\n  margin-bottom: 28px;\n}\n.admin-grid {\n  display: grid;\n  grid-template-columns: 420px 1fr;\n  gap: 24px;\n}\n.admin-form,\n.admin-list {\n  background: white;\n  border-radius: 22px;\n  padding: 24px;\n  box-shadow: 0 12px 35px rgba(0, 0, 0, .08);\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-weight: 800;\n  margin-bottom: 14px;\n}\ninput,\ntextarea {\n  border: 1px solid #d8dee8;\n  border-radius: 12px;\n  padding: 12px;\n}\n.admin-card {\n  display: grid;\n  grid-template-columns: 120px 1fr 150px;\n  gap: 16px;\n  align-items: center;\n  border: 1px solid #edf2f7;\n  border-radius: 18px;\n  padding: 14px;\n  margin-bottom: 14px;\n}\n.admin-card img {\n  width: 120px;\n  height: 86px;\n  object-fit: cover;\n  border-radius: 14px;\n}\n.available {\n  color: #138a43;\n  font-weight: 900;\n}\n.unavailable {\n  color: #c92121;\n  font-weight: 900;\n}\n.admin-card-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.danger {\n  background: #ffefef;\n  color: #c92121;\n}\n.error {\n  color: #c92121;\n  font-weight: 800;\n}\n.success {\n  color: #138a43;\n  font-weight: 800;\n}\n@media (max-width: 900px) {\n  .admin-grid {\n    grid-template-columns: 1fr;\n  }\n  .admin-card {\n    grid-template-columns: 1fr;\n  }\n  .admin-card img {\n    width: 100%;\n    height: 180px;\n  }\n}\n/*# sourceMappingURL=admin-cars.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: CarService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminCarsComponent, { className: "AdminCarsComponent", filePath: "src/app/pages/admin-cars/admin-cars.component.ts", lineNumber: 14 });
})();
export {
  AdminCarsComponent
};
//# sourceMappingURL=chunk-WLUVKPR3.js.map
