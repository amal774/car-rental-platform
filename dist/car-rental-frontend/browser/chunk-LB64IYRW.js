import {
  API_BASE_URL,
  HttpClient
} from "./chunk-NDTMUZAB.js";
import {
  Injectable,
  map,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-GW6N2EK3.js";

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  userStorageKey = "rentcar_current_user";
  tokenStorageKey = "rentcar_auth_token";
  apiUrl = `${API_BASE_URL}/auth`;
  currentUser = this.loadUser();
  constructor(http) {
    this.http = http;
  }
  login(email, password) {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(tap((response) => localStorage.setItem(this.tokenStorageKey, response.token)), tap((response) => {
      const user = this.buildUserFromLoginResponse(response);
      this.currentUser = user;
      localStorage.setItem(this.userStorageKey, JSON.stringify(user));
    }), map(() => true));
  }
  register(user) {
    const payload = {
      fullName: `${user.firstName} ${user.lastName}`.trim(),
      email: user.email,
      password: user.password
    };
    return this.http.post(`${this.apiUrl}/register`, payload, { responseType: "text" }).pipe(map((message) => message.toLowerCase().includes("success")));
  }
  getToken() {
    return localStorage.getItem(this.tokenStorageKey);
  }
  getUser() {
    return this.currentUser;
  }
  isLoggedIn() {
    return !!this.getToken();
  }
  isAdmin() {
    return this.currentUser?.isAdmin === true;
  }
  logout() {
    this.currentUser = null;
    localStorage.removeItem(this.userStorageKey);
    localStorage.removeItem(this.tokenStorageKey);
  }
  buildUserFromLoginResponse(response) {
    const [firstName, ...lastNameParts] = response.fullName.split(" ");
    return {
      id: response.id,
      firstName: firstName || response.email,
      lastName: lastNameParts.join(" "),
      age: 18,
      email: response.email,
      role: response.isAdmin ? "admin" : "client",
      isAdmin: response.isAdmin
    };
  }
  loadUser() {
    const data = localStorage.getItem(this.userStorageKey);
    return data ? JSON.parse(data) : null;
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-LB64IYRW.js.map
