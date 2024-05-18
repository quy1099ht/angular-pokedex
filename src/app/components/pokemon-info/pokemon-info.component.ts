import { Component, Input } from '@angular/core';
import { Pokemon } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrl: './pokemon-info.component.css'
})
export class PokemonInfoComponent {
  @Input() pokemon!: Pokemon | null;
}
