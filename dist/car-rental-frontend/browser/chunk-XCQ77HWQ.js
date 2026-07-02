import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-GW6N2EK3.js";

// src/app/pages/profile/profile.component.ts
var ProfileComponent = class _ProfileComponent {
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 34, vars: 0, consts: [[1, "container", "page"], [1, "grid"], [1, "card", "profile-card"], [1, "btn"], [1, "card", "history-card"], [1, "reservation-item"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "Profil utilisateur");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 1)(4, "div", 2)(5, "h2");
      \u0275\u0275text(6, "Informations personnelles");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p")(8, "strong");
      \u0275\u0275text(9, "Nom :");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(10, " Mechergui");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "p")(12, "strong");
      \u0275\u0275text(13, "Pr\xE9nom :");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(14, " Amine");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "p")(16, "strong");
      \u0275\u0275text(17, "Email :");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(18, " amine@email.com");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "button", 3);
      \u0275\u0275text(20, " Modifier profil ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "div", 4)(22, "h2");
      \u0275\u0275text(23, "Historique des r\xE9servations");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "div", 5)(25, "h3");
      \u0275\u0275text(26, "Toyota Corolla Hybrid");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "p");
      \u0275\u0275text(28, "3 jours");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(29, "div", 5)(30, "h3");
      \u0275\u0275text(31, "BMW S\xE9rie 3");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(32, "p");
      \u0275\u0275text(33, "2 jours");
      \u0275\u0275domElementEnd()()()()();
    }
  }, styles: ["\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 25px;\n}\n.profile-card[_ngcontent-%COMP%], \n.history-card[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.profile-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.history-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.profile-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n.reservation-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e5e7eb;\n  padding: 15px 0;\n}\n.reservation-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.reservation-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.reservation-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #6b7280;\n}\n@media (max-width: 768px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, template: '<section class="container page">\r\n\r\n    <h1>Profil utilisateur</h1>\r\n\r\n    <div class="grid">\r\n\r\n        <div class="card profile-card">\r\n\r\n            <h2>Informations personnelles</h2>\r\n\r\n            <p><strong>Nom :</strong> Mechergui</p>\r\n            <p><strong>Pr\xE9nom :</strong> Amine</p>\r\n            <p><strong>Email :</strong> amine@email.com</p>\r\n\r\n            <button class="btn">\r\n                Modifier profil\r\n            </button>\r\n\r\n        </div>\r\n\r\n        <div class="card history-card">\r\n\r\n            <h2>Historique des r\xE9servations</h2>\r\n\r\n            <div class="reservation-item">\r\n                <h3>Toyota Corolla Hybrid</h3>\r\n                <p>3 jours</p>\r\n            </div>\r\n\r\n            <div class="reservation-item">\r\n                <h3>BMW S\xE9rie 3</h3>\r\n                <p>2 jours</p>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</section>', styles: ["/* src/app/pages/profile/profile.component.css */\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 25px;\n}\n.profile-card,\n.history-card {\n  padding: 24px;\n}\n.profile-card h2,\n.history-card h2 {\n  margin-bottom: 20px;\n}\n.profile-card p {\n  margin: 12px 0;\n}\n.reservation-item {\n  border-bottom: 1px solid #e5e7eb;\n  padding: 15px 0;\n}\n.reservation-item:last-child {\n  border-bottom: none;\n}\n.reservation-item h3 {\n  margin: 0;\n}\n.reservation-item p {\n  margin: 5px 0 0;\n  color: #6b7280;\n}\n@media (max-width: 768px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=profile.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/pages/profile/profile.component.ts", lineNumber: 9 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-XCQ77HWQ.js.map
