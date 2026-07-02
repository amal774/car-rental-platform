import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-GW6N2EK3.js";

// src/app/pages/about/about.component.ts
var AboutComponent = class _AboutComponent {
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], decls: 35, vars: 0, consts: [[1, "container", "page"], [1, "card", "about-card"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "\xC0 propos");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p");
      \u0275\u0275text(5, " CARSOLYSE RentCar est une plateforme moderne de location de voitures qui facilite : ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "ul")(7, "li");
      \u0275\u0275text(8, "la recherche");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "li");
      \u0275\u0275text(10, "la comparaison");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "li");
      \u0275\u0275text(12, "la r\xE9servation de v\xE9hicules");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "h2");
      \u0275\u0275text(14, "Notre mission");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "ul")(16, "li");
      \u0275\u0275text(17, "Offrir une exp\xE9rience simple et rapide.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "li");
      \u0275\u0275text(19, "Garantir une r\xE9servation s\xE9curis\xE9e.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "li");
      \u0275\u0275text(21, "Proposer des v\xE9hicules adapt\xE9s \xE0 tous les besoins.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "h2");
      \u0275\u0275text(23, "Services");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "ul")(25, "li");
      \u0275\u0275text(26, "Location courte dur\xE9e");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "li");
      \u0275\u0275text(28, "Location longue dur\xE9e");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "li");
      \u0275\u0275text(30, "V\xE9hicules \xE9conomiques");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "li");
      \u0275\u0275text(32, "V\xE9hicules premium");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "li");
      \u0275\u0275text(34, "SUV et v\xE9hicules familiaux");
      \u0275\u0275domElementEnd()()()();
    }
  }, styles: ["\n.about-card[_ngcontent-%COMP%] {\n  padding: 34px;\n}\n.about-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.about-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 10px;\n}\n.about-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  color: #555;\n}\n.about-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding-left: 20px;\n}\n.about-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  line-height: 1.7;\n}\n/*# sourceMappingURL=about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "app-about", standalone: true, template: '<section class="container page">\r\n    <div class="card about-card">\r\n\r\n        <h1>\xC0 propos</h1>\r\n\r\n        <p>\r\n            CARSOLYSE RentCar est une plateforme moderne de location de voitures\r\n            qui facilite :\r\n        </p>\r\n        <ul>\r\n            <li>la recherche</li>\r\n            <li>la comparaison</li>\r\n            <li>la r\xE9servation de v\xE9hicules</li>\r\n        </ul>\r\n\r\n\r\n        <h2>Notre mission</h2>\r\n\r\n        <ul>\r\n            <li>Offrir une exp\xE9rience simple et rapide.</li>\r\n            <li>Garantir une r\xE9servation s\xE9curis\xE9e.</li>\r\n            <li>Proposer des v\xE9hicules adapt\xE9s \xE0 tous les besoins.</li>\r\n        </ul>\r\n\r\n        <h2>Services</h2>\r\n\r\n        <ul>\r\n            <li>Location courte dur\xE9e</li>\r\n            <li>Location longue dur\xE9e</li>\r\n            <li>V\xE9hicules \xE9conomiques</li>\r\n            <li>V\xE9hicules premium</li>\r\n            <li>SUV et v\xE9hicules familiaux</li>\r\n        </ul>\r\n\r\n    </div>\r\n</section>', styles: ["/* src/app/pages/about/about.component.css */\n.about-card {\n  padding: 34px;\n}\n.about-card h1 {\n  margin-bottom: 20px;\n}\n.about-card h2 {\n  margin-top: 25px;\n  margin-bottom: 10px;\n}\n.about-card p {\n  line-height: 1.8;\n  color: #555;\n}\n.about-card ul {\n  margin-left: 20px;\n  padding-left: 20px;\n}\n.about-card li {\n  margin-bottom: 10px;\n  line-height: 1.7;\n}\n/*# sourceMappingURL=about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/pages/about/about.component.ts", lineNumber: 9 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-OUCL32QO.js.map
