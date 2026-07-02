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
  NumberValueAccessor,
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

// src/app/pages/register/register.component.ts
function RegisterComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, " V\xE9rifiez les champs : obligatoire, \xE2ge minimum 18 ans, emails et mots de passe identiques. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, " Impossible de creer le compte. Verifiez que auth-service et api-gateway sont demarres, ou que cet email n existe pas deja. ");
    \u0275\u0275elementEnd();
  }
}
function match(a, b) {
  return (c) => c.get(a)?.value === c.get(b)?.value ? null : { mismatch: true };
}
var RegisterComponent = class _RegisterComponent {
  fb;
  authService;
  router;
  form;
  registerError = false;
  showNotification = false;
  notificationTitle = "";
  notificationMessage = "";
  shouldNavigateToLogin = false;
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.form = this.fb.group({
      lastName: ["", Validators.required],
      firstName: ["", Validators.required],
      age: [18, [Validators.required, Validators.min(18)]],
      email: ["", [Validators.required, Validators.email]],
      confirmEmail: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required]
    }, {
      validators: [
        match("email", "confirmEmail"),
        match("password", "confirmPassword")
      ]
    });
  }
  submit() {
    this.form.markAllAsTouched();
    this.registerError = false;
    if (this.form.invalid) {
      return;
    }
    const value = this.form.getRawValue();
    this.authService.register({
      firstName: value.firstName || "",
      lastName: value.lastName || "",
      age: value.age || 18,
      email: value.email || "",
      password: value.password || ""
    }).subscribe({
      next: (success) => {
        if (success) {
          this.openNotification("Compte cree", "Votre compte a ete cree avec succes. Vous pouvez maintenant vous connecter.", true);
          return;
        }
        this.showRegisterError();
      },
      error: () => {
        this.showRegisterError();
      }
    });
  }
  closeNotification() {
    this.showNotification = false;
    if (this.shouldNavigateToLogin) {
      this.router.navigate(["/login"]);
    }
  }
  openNotification(title, message, navigateToLogin = false) {
    this.notificationTitle = title;
    this.notificationMessage = message;
    this.shouldNavigateToLogin = navigateToLogin;
    this.showNotification = true;
  }
  showRegisterError() {
    this.registerError = true;
    this.openNotification("Inscription impossible", "Verifiez que auth-service et api-gateway sont demarres, ou que cet email n existe pas deja.");
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 19, vars: 6, consts: [[1, "form", 3, "ngSubmit", "formGroup"], ["formControlName", "lastName", "placeholder", "Nom"], ["formControlName", "firstName", "placeholder", "Pr\xE9nom"], ["formControlName", "age", "type", "number", "placeholder", "\xC2ge"], ["formControlName", "email", "type", "email", "placeholder", "Email"], ["formControlName", "confirmEmail", "type", "email", "placeholder", "Confirmation Email"], ["formControlName", "password", "type", "password", "placeholder", "Mot de passe"], ["formControlName", "confirmPassword", "type", "password", "placeholder", "Confirmation Mot de passe"], [1, "error"], ["type", "submit", 1, "btn"], ["routerLink", "/login"], [3, "closed", "visible", "title", "message"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(1, "h1");
      \u0275\u0275text(2, "Inscription");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "input", 1);
      \u0275\u0275controlCreate();
      \u0275\u0275element(4, "input", 2);
      \u0275\u0275controlCreate();
      \u0275\u0275element(5, "input", 3);
      \u0275\u0275controlCreate();
      \u0275\u0275element(6, "input", 4);
      \u0275\u0275controlCreate();
      \u0275\u0275element(7, "input", 5);
      \u0275\u0275controlCreate();
      \u0275\u0275element(8, "input", 6);
      \u0275\u0275controlCreate();
      \u0275\u0275element(9, "input", 7);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(10, RegisterComponent_Conditional_10_Template, 2, 0, "p", 8);
      \u0275\u0275conditionalCreate(11, RegisterComponent_Conditional_11_Template, 2, 0, "p", 8);
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275text(13, " Cr\xE9er un compte ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p");
      \u0275\u0275text(15, " D\xE9j\xE0 inscrit ? ");
      \u0275\u0275elementStart(16, "a", 10);
      \u0275\u0275text(17, " Connexion ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "app-notification", 11);
      \u0275\u0275listener("closed", function RegisterComponent_Template_app_notification_closed_18_listener() {
        return ctx.closeNotification();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.invalid && ctx.form.touched ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.registerError ? 11 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("visible", ctx.showNotification)("title", ctx.notificationTitle)("message", ctx.notificationMessage);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, NotificationComponent], styles: ["\n.form[_ngcontent-%COMP%] {\n  max-width: 550px;\n  margin: 50px auto;\n}\n.form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  margin-bottom: 14px;\n  border: 1px solid #d8dee8;\n  border-radius: 12px;\n  font-size: 15px;\n}\n.error[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n  margin: 10px 0;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=register.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [ReactiveFormsModule, RouterLink, NotificationComponent], template: '<form\r\n        class="form"\r\n        [formGroup]="form"\r\n        (ngSubmit)="submit()">\r\n\r\n    <h1>Inscription</h1>\r\n\r\n    <input\r\n            formControlName="lastName"\r\n            placeholder="Nom">\r\n\r\n    <input\r\n            formControlName="firstName"\r\n            placeholder="Pr\xE9nom">\r\n\r\n    <input\r\n            formControlName="age"\r\n            type="number"\r\n            placeholder="\xC2ge">\r\n\r\n    <input\r\n            formControlName="email"\r\n            type="email"\r\n            placeholder="Email">\r\n\r\n    <input\r\n            formControlName="confirmEmail"\r\n            type="email"\r\n            placeholder="Confirmation Email">\r\n\r\n    <input\r\n            formControlName="password"\r\n            type="password"\r\n            placeholder="Mot de passe">\r\n\r\n    <input\r\n            formControlName="confirmPassword"\r\n            type="password"\r\n            placeholder="Confirmation Mot de passe">\r\n\r\n    @if(form.invalid && form.touched){\r\n    <p class="error">\r\n        V\xE9rifiez les champs :\r\n        obligatoire, \xE2ge minimum 18 ans,\r\n        emails et mots de passe identiques.\r\n    </p>\r\n    }\r\n\r\n    @if(registerError){\n    <p class="error">\n        Impossible de creer le compte. Verifiez que auth-service et api-gateway sont demarres, ou que cet email n existe pas deja.\n    </p>\n    }\n\n    <button\n            class="btn"\n            type="submit">\n        Cr\xE9er un compte\r\n    </button>\r\n\r\n    <p>\r\n        D\xE9j\xE0 inscrit ?\r\n        <a routerLink="/login">\r\n            Connexion\r\n        </a>\r\n    </p>\r\n\r\n</form>\n\n<app-notification\n        [visible]="showNotification"\n        [title]="notificationTitle"\n        [message]="notificationMessage"\n        (closed)="closeNotification()">\n</app-notification>\n', styles: ["/* src/app/pages/register/register.component.css */\n.form {\n  max-width: 550px;\n  margin: 50px auto;\n}\n.form h1 {\n  margin-bottom: 25px;\n}\n.form input {\n  width: 100%;\n  padding: 12px;\n  margin-bottom: 14px;\n  border: 1px solid #d8dee8;\n  border-radius: 12px;\n  font-size: 15px;\n}\n.error {\n  color: #dc3545;\n  font-weight: 600;\n  margin: 10px 0;\n}\n.btn {\n  width: 100%;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=register.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/pages/register/register.component.ts", lineNumber: 22 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-KHWFRMQD.js.map
