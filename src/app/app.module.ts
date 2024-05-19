import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PokedexInterceptor } from './shared/interceptors/pokedex-interceptor';
import { FormatNumberPipe } from './shared/pipes/format-number.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { LoaderComponent } from './components/loader/loader.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormatNumberPipe,
    ModalComponent,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PokemonInfoComponent,
    PokemonItemComponent,
    LoaderComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PokedexInterceptor,
      multi: true,
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
