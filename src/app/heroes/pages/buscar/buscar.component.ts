import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino:string ='';
  heroes:Heroe[] = [];

  heroeSeleccionado: Heroe | undefined;

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugerencias(this.termino.trim())
    .subscribe(heroes=>this.heroes = heroes)
  }
//lo sabemos imprimiendo el evneto con any
  opcionSeleccionada(event:MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    } 

    const heroe:Heroe = event.option.value;
    
    // console.log(heroe)
    this.termino = heroe.superhero;
    this.heroesService.getHeroePorId(heroe.id!)//puede que no llegue
      .subscribe(heroe=>this.heroeSeleccionado = heroe)
  }

}
