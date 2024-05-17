import { TestBed } from '@angular/core/testing';

import { PokemonServices } from './pokemon.service';

describe('CurrencyService', () => {
  let service: PokemonServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
