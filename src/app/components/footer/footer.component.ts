import { Component } from '@angular/core';
@Component({selector:'app-footer',standalone:true,template:`
    <footer><div class="container footer"><b>CARSOLYSE RentCar</b>
    <span>© 2026 - CARSOLYSE</span>
    <span><i class="fa-solid fa-phone"></i> +216 23 707 000</span>
    </div></footer>`,
    styles:[`
        footer{background:#111827;color:#fff;margin-top:50px}.footer{display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;padding:30px 0}`]})
export class FooterComponent {}
