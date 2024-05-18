import { Component, Input } from '@angular/core';
import { Pokemon, Type } from '../../shared/interfaces/interfaces';
import { FormatNumberPipe } from "../../shared/pipes/format-number.pipe";
import { PokemonType, typeColours } from '../../shared/interfaces/constants';

@Component({
    selector: 'app-pokemon-item',
    templateUrl: './pokemon-item.component.html',
    styleUrl: './pokemon-item.component.css',
})
export class PokemonItemComponent {
  @Input() pokemon: Pokemon = {} as Pokemon;
  @Input() pokemonTypes: Type[] = [];

  getPokemonType(typeId: number): PokemonType {
    return this.pokemonTypes.filter(val => val.id === typeId)[0].name as PokemonType;
  }

  getTypeColor(id: number) {
    return typeColours[this.getPokemonType(id)]
  }
}
