import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PokemonApiResponse, PokemonQueryParams, PokemonResponse, PokemonTypesResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonServices {

  constructor(private http: HttpClient) { }
  getListOfPokemons({
    pageNumber = 1, pageSize = 9, sort = 'number',
    filterType = -1,
  }: PokemonQueryParams) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page[number]", pageNumber);
    queryParams = queryParams.append("page[size]", pageSize);
    queryParams = queryParams.append("sort", sort);
    
    queryParams = queryParams.append("filter[type]", filterType >= 0 ? filterType : '');
    return this.http.get<PokemonResponse>('pokemon-api/pokemons', { params: queryParams })
  }

  getPokemon(id: string) {
    return this.http.get<PokemonApiResponse>(`pokemon-api/pokemons/${id}`)
  }

  getPokemonTypes() {
    return this.http.get<PokemonTypesResponse>(`pokemon-api/types`)
  }
  getPokemonSprite(id: string) {
    return this.http.get(`pokemon-api/pokemons/${id}/sprite`, {
      responseType: 'blob'
    })
  }
}
