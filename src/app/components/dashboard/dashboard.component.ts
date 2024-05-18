import { Component, OnInit } from '@angular/core';
import { PokemonServices } from '../../shared/services/pokemon.service';
import { sortingOptions } from '../../shared/interfaces/constants';
import { Pokemon, SortParam, Type } from '../../shared/interfaces/interfaces';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sortingOptions = sortingOptions;

  selectedSort: SortParam = sortingOptions[0].value as SortParam;

  selectedFilter: number = -1;

  listOfPokemons: Pokemon[] = [];

  pokemonTypes: Type[] = [];

  currentPage: number = 1;

  finalPage: number = 0;

  selectedPokemon: Pokemon | null = null;

  showModal = false;

  constructor(
    private pokemonService: PokemonServices,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.pokemonService.getListOfPokemons({
      pageNumber: this.currentPage,
      sort: this.selectedSort,
      filterType: this.selectedFilter,
    }).subscribe({
      next: (val => {
        this.listOfPokemons = val.data
        this.finalPage = val.meta.last_page;
      }),
    })

    this.pokemonService.getPokemonTypes().subscribe({next: (val => {
      this.pokemonTypes = [{id: -1, name: "None"}].concat(val.data);
    })})

  }

  onSortChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedSort = target.value as SortParam;
    this.listOfPokemons = []
    this.pokemonService.getListOfPokemons({
      pageNumber: this.currentPage,
      sort: this.selectedSort,
      filterType: this.selectedFilter,
    }).subscribe({
      next: (val => {
        this.listOfPokemons = val.data
        this.finalPage = val.meta.last_page;
      }),
    })
  }
  
  onFilterChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedFilter = target.value as unknown as number;
    this.listOfPokemons = [];
    this.pokemonService.getListOfPokemons({
      pageNumber: this.currentPage,
      sort: this.selectedSort,
      filterType: this.selectedFilter,
    }).subscribe({
      next: (val => {
        this.listOfPokemons = val.data
        this.finalPage = val.meta.last_page;
      }),
    })
  }

  getPokemonType(typeId: number) {
    return this.pokemonTypes.filter(val => val.id === typeId)[0].name;
  }
  
  changePage(isPlus: boolean) {
    this.currentPage += isPlus ? 1 : -1;
    this.listOfPokemons = [];
    this.pokemonService.getListOfPokemons({
      pageNumber: this.currentPage,
      sort: this.selectedSort,
      filterType: this.selectedFilter,
    }).subscribe({
      next: (val => {
        this.listOfPokemons = val.data
        this.finalPage = val.meta.last_page;
      }),
    })
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  getPokemonInfo(id: string) {
    const pokemon = this.listOfPokemons.filter(pkm => pkm.id === id)[0];

    this.pokemonService.getPokemonSprite(pokemon.id).subscribe({next:(blob)=>{
      let objectURL = URL.createObjectURL(blob);    
      const url = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      pokemon.image = url;      
      this.selectedPokemon = pokemon;
      this.showModal = true;
    },})
  }
}
