import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GW6N2EK3.js";

// src/app/components/notification/notification.component.ts
function NotificationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275domElement(3, "i", 3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "button", 4);
    \u0275\u0275domListener("click", function NotificationComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(9, " OK ");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.message);
  }
}
var NotificationComponent = class _NotificationComponent {
  title = "";
  message = "";
  visible = false;
  closed = new EventEmitter();
  close() {
    this.closed.emit();
  }
  static \u0275fac = function NotificationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationComponent, selectors: [["app-notification"]], inputs: { title: "title", message: "message", visible: "visible" }, outputs: { closed: "closed" }, decls: 1, vars: 1, consts: [[1, "overlay"], [1, "notification-box"], [1, "icon"], [1, "fa-solid", "fa-circle-exclamation"], [1, "btn", 3, "click"]], template: function NotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, NotificationComponent_Conditional_0_Template, 10, 2, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.visible ? 0 : -1);
    }
  }, styles: ["\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .55);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.notification-box[_ngcontent-%COMP%] {\n  width: 450px;\n  max-width: 90%;\n  background: white;\n  border-radius: 24px;\n  padding: 30px;\n  text-align: center;\n  animation: _ngcontent-%COMP%_pop .25s ease;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, .2);\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 55px;\n  color: #0d6efd;\n  margin-bottom: 15px;\n}\n.notification-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.notification-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 25px;\n}\n@keyframes _ngcontent-%COMP%_pop {\n  from {\n    transform: scale(.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=notification.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationComponent, [{
    type: Component,
    args: [{ selector: "app-notification", standalone: true, template: '@if(visible){\r\n\r\n<div class="overlay">\r\n\r\n    <div class="notification-box">\r\n\r\n        <div class="icon">\r\n            <i class="fa-solid fa-circle-exclamation"></i>\r\n        </div>\r\n\r\n        <h2>{{ title }}</h2>\r\n\r\n        <p>{{ message }}</p>\r\n\r\n        <button\r\n                class="btn"\r\n                (click)="close()">\r\n\r\n            OK\r\n\r\n        </button>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n}', styles: ["/* src/app/components/notification/notification.component.css */\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .55);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.notification-box {\n  width: 450px;\n  max-width: 90%;\n  background: white;\n  border-radius: 24px;\n  padding: 30px;\n  text-align: center;\n  animation: pop .25s ease;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, .2);\n}\n.icon {\n  font-size: 55px;\n  color: #0d6efd;\n  margin-bottom: 15px;\n}\n.notification-box h2 {\n  margin-bottom: 10px;\n}\n.notification-box p {\n  color: #64748b;\n  margin-bottom: 25px;\n}\n@keyframes pop {\n  from {\n    transform: scale(.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=notification.component.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }], message: [{
    type: Input
  }], visible: [{
    type: Input
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationComponent, { className: "NotificationComponent", filePath: "src/app/components/notification/notification.component.ts", lineNumber: 9 });
})();

export {
  NotificationComponent
};
//# sourceMappingURL=chunk-N2ZE6L7E.js.map
