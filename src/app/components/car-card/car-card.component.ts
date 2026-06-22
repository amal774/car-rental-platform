import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Car } from '../../models/car.model';
@Component({selector:'app-car-card',standalone:true,imports:[RouterLink],template:`<div class="card car"><img [src]="car.image" [alt]="car.brand+' '+car.model"><div class="body"><span class="badge" [class.off]="!car.available">{{car.available?'Disponible':'Non disponible'}}</span><h3>{{car.brand}} {{car.model}}</h3><p><i class="fa-solid fa-gas-pump"></i> {{car.fuel}} · <i class="fa-solid fa-gears"></i> {{car.transmission}}</p><div class="price">{{car.pricePerDay}} TND / jour</div><a [routerLink]="['/cars',car.id]" class="btn">Voir détails</a></div></div>`,styles:[`.car img{width:100%;height:190px;object-fit:cover}.body{padding:20px}h3{margin:12px 0 8px}.price{font-size:20px;font-weight:900;margin:18px 0;color:#0d6efd}.btn{display:inline-block}`]})
export class CarCardComponent { @Input({required:true}) car!: Car; }
