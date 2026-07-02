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
  Router,
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
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-GW6N2EK3.js";

// src/app/pages/login/login.component.ts
function LoginComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, " Email invalide ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, " Mot de passe obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, " Email ou mot de passe incorrect. ");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  authService;
  router;
  loginError = false;
  form;
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    const { email, password } = this.form.getRawValue();
    this.authService.login(email || "", password || "").subscribe({
      next: () => {
        if (this.authService.isAdmin()) {
          this.router.navigate(["/admin/cars"]);
        } else {
          this.router.navigate(["/profile"]);
        }
      },
      error: () => {
        this.loginError = true;
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 22, vars: 4, consts: [[1, "form", 3, "ngSubmit", "formGroup"], [1, "hint"], ["formControlName", "email", "type", "email"], [1, "error"], ["formControlName", "password", "type", "password"], ["type", "submit", 1, "btn"], ["routerLink", "/register"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(1, "h1");
      \u0275\u0275text(2, "Connexion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 1);
      \u0275\u0275text(4, " Admin test : admin@rentcar.com / admin123 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 1);
      \u0275\u0275text(6, " Client test : client@rentcar.com / client123 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "label");
      \u0275\u0275text(8, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "input", 2);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(10, LoginComponent_Conditional_10_Template, 2, 0, "p", 3);
      \u0275\u0275elementStart(11, "label");
      \u0275\u0275text(12, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 4);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(14, LoginComponent_Conditional_14_Template, 2, 0, "p", 3);
      \u0275\u0275conditionalCreate(15, LoginComponent_Conditional_15_Template, 2, 0, "p", 3);
      \u0275\u0275elementStart(16, "button", 5);
      \u0275\u0275text(17, " Se connecter ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, " Pas de compte ? ");
      \u0275\u0275elementStart(20, "a", 6);
      \u0275\u0275text(21, " Inscription ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(9);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.email.invalid && ctx.form.controls.email.touched ? 10 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.password.invalid && ctx.form.controls.password.touched ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loginError ? 15 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n.hint[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  border-radius: 10px;\n  padding: 8px 10px;\n  margin: 6px 0;\n  color: #42526b;\n  font-size: 14px;\n}\n.form[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 50px auto;\n}\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 15px;\n  font-weight: 600;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #d8dee8;\n  border-radius: 10px;\n  margin-top: 5px;\n}\n.error[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin-top: 5px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [ReactiveFormsModule, RouterLink], template: '<form\r\n        class="form"\r\n        [formGroup]="form"\r\n        (ngSubmit)="submit()">\r\n\r\n    <h1>Connexion</h1>\r\n\r\n    <p class="hint">\r\n        Admin test : admin@rentcar.com / admin123\r\n    </p>\r\n\r\n    <p class="hint">\r\n        Client test : client@rentcar.com / client123\r\n    </p>\r\n\r\n    <label>Email</label>\r\n\r\n    <input\r\n            formControlName="email"\r\n            type="email">\r\n\r\n    @if(form.controls.email.invalid &&\r\n    form.controls.email.touched){\r\n    <p class="error">\r\n        Email invalide\r\n    </p>\r\n    }\r\n\r\n    <label>Mot de passe</label>\r\n\r\n    <input\r\n            formControlName="password"\r\n            type="password">\r\n\r\n    @if(form.controls.password.invalid &&\r\n    form.controls.password.touched){\r\n    <p class="error">\r\n        Mot de passe obligatoire\r\n    </p>\r\n    }\r\n\r\n    @if(loginError){\r\n    <p class="error">\r\n        Email ou mot de passe incorrect.\r\n    </p>\r\n    }\r\n\r\n    <button\r\n            class="btn"\r\n            type="submit">\r\n        Se connecter\r\n    </button>\r\n\r\n    <p>\r\n        Pas de compte ?\r\n        <a routerLink="/register">\r\n            Inscription\r\n        </a>\r\n    </p>\r\n\r\n</form>', styles: ["/* src/app/pages/login/login.component.css */\n.hint {\n  background: #f5f7fb;\n  border-radius: 10px;\n  padding: 8px 10px;\n  margin: 6px 0;\n  color: #42526b;\n  font-size: 14px;\n}\n.form {\n  max-width: 500px;\n  margin: 50px auto;\n}\n.form label {\n  display: block;\n  margin-top: 15px;\n  font-weight: 600;\n}\n.form input {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #d8dee8;\n  border-radius: 10px;\n  margin-top: 5px;\n}\n.error {\n  color: #dc3545;\n  margin-top: 5px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 13 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-QJCGRYM7.js.map
