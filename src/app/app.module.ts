import {NgModule} from '@angular/core';
import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { AboutComponent} from './components/about/about.component';
import { AnimalComponent} from './components/animal/animal.component';
import {AnimalTarjetaComponent} from './components/animal-tarjeta/animal-tarjeta.component';
import { AnimalesComponent} from './components/animales/animales.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {AnimalesService} from './servicios/animales.service';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    AnimalComponent,
    AnimalesComponent,
    AnimalTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [AnimalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
