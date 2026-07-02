import {
  AuthService
} from "./chunk-LB64IYRW.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-FMAUA3CS.js";
import {
  provideHttpClient
} from "./chunk-NDTMUZAB.js";
import "./chunk-7LYVZ2VI.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-GW6N2EK3.js";

// src/app/components/navbar/navbar.component.ts
var _c0 = () => ({ exact: true });
function NavbarComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1, "Admin");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(1, "D\xE9connexion");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1, "Connexion");
    \u0275\u0275elementEnd();
  }
}
var NavbarComponent = class _NavbarComponent {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], decls: 17, vars: 4, consts: [[1, "navbar"], [1, "container", "nav-content"], ["routerLink", "/", 1, "logo"], [1, "fa-solid", "fa-car"], [1, "nav-links"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/cars", "routerLinkActive", "active"], ["routerLink", "/about", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"], ["routerLink", "/admin/cars", "routerLinkActive", "active"], ["type", "button", 1, "login"], ["routerLink", "/login", 1, "login"], ["type", "button", 1, "login", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275text(4, " CARSOLYSE RentCar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "a", 5);
      \u0275\u0275text(7, "Accueil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 6);
      \u0275\u0275text(9, "Voitures");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 7);
      \u0275\u0275text(11, "\xC0 propos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 8);
      \u0275\u0275text(13, "Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, NavbarComponent_Conditional_14_Template, 2, 0, "a", 9);
      \u0275\u0275conditionalCreate(15, NavbarComponent_Conditional_15_Template, 2, 0, "button", 10)(16, NavbarComponent_Conditional_16_Template, 2, 0, "a", 11);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(3, _c0));
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.authService.isAdmin() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.authService.isLoggedIn() ? 15 : 16);
    }
  }, dependencies: [RouterLink, RouterLinkActive], styles: ["\n.navbar[_ngcontent-%COMP%] {\n  background: #fff;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, .06);\n}\n.nav-content[_ngcontent-%COMP%] {\n  height: 76px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.logo[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  color: #0d6efd;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 28px;\n  font-weight: 700;\n}\n.active[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.login[_ngcontent-%COMP%] {\n  background: #0d6efd;\n  color: #fff;\n  padding: 10px 16px;\n  border-radius: 12px;\n  border: 0;\n  font-weight: 800;\n  cursor: pointer;\n}\n@media (max-width: 800px) {\n  .nav-content[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 16px;\n    align-items: flex-start;\n  }\n  .nav-links[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 14px;\n  }\n  .logo[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [RouterLink, RouterLinkActive], template: `
  <nav class="navbar">
    <div class="container nav-content">
      <a routerLink="/" class="logo"><i class="fa-solid fa-car"></i> CARSOLYSE RentCar</a>
      <div class="nav-links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Accueil</a>
        <a routerLink="/cars" routerLinkActive="active">Voitures</a>
        <a routerLink="/about" routerLinkActive="active">\xC0 propos</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
        @if(authService.isAdmin()){
          <a routerLink="/admin/cars" routerLinkActive="active">Admin</a>
        }
        @if(authService.isLoggedIn()){
          <button class="login" type="button" (click)="logout()">D\xE9connexion</button>
        } @else {
          <a routerLink="/login" class="login">Connexion</a>
        }
      </div>
    </div>
  </nav>`, styles: ["/* angular:styles/component:css;b9baec4de0db0636d37fb79b69cfbec7b58a469216f820495027eda2a0b57311;C:/Users/meche/Downloads/car-rental-frontend/src/app/components/navbar/navbar.component.ts */\n.navbar {\n  background: #fff;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, .06);\n}\n.nav-content {\n  height: 76px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.logo {\n  font-size: 24px;\n  font-weight: 900;\n  color: #0d6efd;\n}\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 28px;\n  font-weight: 700;\n}\n.active {\n  color: #0d6efd;\n}\n.login {\n  background: #0d6efd;\n  color: #fff;\n  padding: 10px 16px;\n  border-radius: 12px;\n  border: 0;\n  font-weight: 800;\n  cursor: pointer;\n}\n@media (max-width: 800px) {\n  .nav-content {\n    height: auto;\n    padding: 16px;\n    align-items: flex-start;\n  }\n  .nav-links {\n    flex-wrap: wrap;\n    gap: 14px;\n  }\n  .logo {\n    margin-right: 10px;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/components/navbar/navbar.component.ts", lineNumber: 31 });
})();

// src/app/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 0, consts: [[1, "container", "footer"], [1, "fa-solid", "fa-phone"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "footer")(1, "div", 0)(2, "b");
      \u0275\u0275text(3, "CARSOLYSE RentCar");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "span");
      \u0275\u0275text(5, "\xA9 2026 - CARSOLYSE");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "span");
      \u0275\u0275domElement(7, "i", 1);
      \u0275\u0275text(8, " +216 23 707 000");
      \u0275\u0275domElementEnd()()();
    }
  }, styles: ["\nfooter[_ngcontent-%COMP%] {\n  background: #111827;\n  color: #fff;\n  margin-top: 50px;\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 18px;\n  flex-wrap: wrap;\n  padding: 30px 0;\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, template: `
    <footer><div class="container footer"><b>CARSOLYSE RentCar</b>
    <span>\xA9 2026 - CARSOLYSE</span>
    <span><i class="fa-solid fa-phone"></i> +216 23 707 000</span>
    </div></footer>`, styles: ["/* angular:styles/component:css;0d45ae45ed99e572328ea1a9f2cf53d5aa74e2688eb6e33c6c4a2b07d94128fd;C:/Users/meche/Downloads/car-rental-frontend/src/app/components/footer/footer.component.ts */\nfooter {\n  background: #111827;\n  color: #fff;\n  margin-top: 50px;\n}\n.footer {\n  display: flex;\n  justify-content: space-between;\n  gap: 18px;\n  flex-wrap: wrap;\n  padding: 30px 0;\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/components/footer/footer.component.ts", lineNumber: 9 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar")(1, "router-outlet")(2, "app-footer");
    }
  }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet, NavbarComponent, FooterComponent],
      template: `<app-navbar /><router-outlet /><app-footer />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 12 });
})();

// src/app/services/admin.guard.ts
var adminGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAdmin()) {
    return true;
  }
  return router.createUrlTree(["/login"]);
};

// src/app/app.routes.ts
var routes = [
  { path: "", loadComponent: () => import("./chunk-WYI557OR.js").then((m) => m.HomeComponent) },
  { path: "login", loadComponent: () => import("./chunk-QJCGRYM7.js").then((m) => m.LoginComponent) },
  { path: "register", loadComponent: () => import("./chunk-KHWFRMQD.js").then((m) => m.RegisterComponent) },
  { path: "cars", loadComponent: () => import("./chunk-KVNGBUWC.js").then((m) => m.CarsComponent) },
  { path: "cars/:id", loadComponent: () => import("./chunk-H46R3ISF.js").then((m) => m.CarDetailsComponent) },
  { path: "reservation/:id", loadComponent: () => import("./chunk-W26UGDEZ.js").then((m) => m.ReservationComponent) },
  { path: "profile", loadComponent: () => import("./chunk-XCQ77HWQ.js").then((m) => m.ProfileComponent) },
  { path: "contact", loadComponent: () => import("./chunk-PSYHJGFM.js").then((m) => m.ContactComponent) },
  { path: "about", loadComponent: () => import("./chunk-OUCL32QO.js").then((m) => m.AboutComponent) },
  {
    path: "admin/cars",
    canActivate: [adminGuard],
    loadComponent: () => import("./chunk-WLUVKPR3.js").then((m) => m.AdminCarsComponent)
  },
  {
    path: "reservation-summary",
    loadComponent: () => import("./chunk-AB7YONGF.js").then((m) => m.ReservationSummaryComponent)
  },
  { path: "**", redirectTo: "" }
];

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
