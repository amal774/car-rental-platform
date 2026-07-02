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
import "./chunk-7LYVZ2VI.js";
import {
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
  ɵɵtext,
  ɵɵtrustConstantResourceUrl
} from "./chunk-GW6N2EK3.js";

// src/app/pages/contact/contact.component.ts
var ContactComponent = class _ContactComponent {
  fb;
  form;
  constructor(fb) {
    this.fb = fb;
    this.form = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required]
    });
  }
  static \u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], decls: 24, vars: 1, consts: [[1, "container", "page", "grid"], [1, "form", 3, "formGroup"], ["formControlName", "name", "placeholder", "Nom"], ["formControlName", "email", "placeholder", "Email"], ["formControlName", "message", "rows", "5", "placeholder", "Message"], ["type", "submit", 1, "btn"], [1, "card", "contact-info"], [1, "fa-solid", "fa-location-dot"], [1, "fa-solid", "fa-phone"], [1, "fa-solid", "fa-envelope"], [1, "map-container"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.google.com/maps?q=Tunis,Tunisia&output=embed`, "width", "100%", "height", "300", "loading", "lazy", 2, "border", "0"]], template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "form", 1)(2, "h1");
      \u0275\u0275text(3, "Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "input", 2);
      \u0275\u0275controlCreate();
      \u0275\u0275element(5, "input", 3);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(6, "textarea", 4);
      \u0275\u0275text(7, "    ");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275text(9, " Envoyer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "h2");
      \u0275\u0275text(12, "Nos coordonn\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p");
      \u0275\u0275element(14, "i", 7);
      \u0275\u0275text(15, " Tunis, Tunisie ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p");
      \u0275\u0275element(17, "i", 8);
      \u0275\u0275text(18, " +216 23 707 000 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p");
      \u0275\u0275element(20, "i", 9);
      \u0275\u0275text(21, " contact@carsolyse_rentcar.tn ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 10);
      \u0275\u0275element(23, "iframe", 11);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275control();
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: 30px;\n}\n.form[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  border-radius: 20px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, .08);\n}\n.form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n  padding: 12px;\n  border: 1px solid #d8dee8;\n  border-radius: 12px;\n  font-size: 15px;\n}\n.contact-info[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n@media (max-width: 900px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=contact.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactComponent, [{
    type: Component,
    args: [{ selector: "app-contact", standalone: true, imports: [ReactiveFormsModule], template: '<section class="container page grid">\r\n\r\n    <form class="form" [formGroup]="form">\r\n\r\n        <h1>Contact</h1>\r\n\r\n        <input\r\n                formControlName="name"\r\n                placeholder="Nom">\r\n\r\n        <input\r\n                formControlName="email"\r\n                placeholder="Email">\r\n\r\n        <textarea\r\n                formControlName="message"\r\n                rows="5"\r\n                placeholder="Message">\r\n    </textarea>\r\n\r\n        <button class="btn" type="submit">\r\n            Envoyer\r\n        </button>\r\n\r\n    </form>\r\n\r\n    <div class="card contact-info">\r\n\r\n        <h2>Nos coordonn\xE9es</h2>\r\n\r\n        <p>\r\n            <i class="fa-solid fa-location-dot"></i>\r\n            Tunis, Tunisie\r\n        </p>\r\n\r\n        <p>\r\n            <i class="fa-solid fa-phone"></i>\r\n            +216 23 707 000\r\n        </p>\r\n\r\n        <p>\r\n            <i class="fa-solid fa-envelope"></i>\r\n            contact@carsolyse_rentcar.tn\r\n        </p>\r\n        <div class="map-container">\r\n            <iframe\r\n                    src="https://www.google.com/maps?q=Tunis,Tunisia&output=embed"\r\n                    width="100%"\r\n                    height="300"\r\n                    style="border:0"\r\n                    loading="lazy">\r\n            </iframe>\r\n        </div>\r\n    </div>\r\n\r\n</section>', styles: ["/* src/app/pages/contact/contact.component.css */\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: 30px;\n}\n.form {\n  background: white;\n  padding: 30px;\n  border-radius: 20px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, .08);\n}\n.form h1 {\n  margin-bottom: 20px;\n}\n.form input,\n.form textarea {\n  width: 100%;\n  margin-bottom: 15px;\n  padding: 12px;\n  border: 1px solid #d8dee8;\n  border-radius: 12px;\n  font-size: 15px;\n}\n.contact-info {\n  padding: 30px;\n}\n.contact-info p {\n  margin: 15px 0;\n}\n@media (max-width: 900px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=contact.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src/app/pages/contact/contact.component.ts", lineNumber: 11 });
})();
export {
  ContactComponent
};
//# sourceMappingURL=chunk-PSYHJGFM.js.map
