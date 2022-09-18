import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
    `
    mat-card {
      margin-top: 20px;
    }
    `
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe !:Heroe;

  ngOnInit(): void {
 
  }

}
