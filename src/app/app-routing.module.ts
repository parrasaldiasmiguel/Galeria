
import { Routes, RouterModule } from '@angular/router';


import { AboutComponent} from './components/about/about.component';
import { AnimalComponent} from './components/animal/animal.component';
import { AnimalesComponent} from './components/animales/animales.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';


const APP_ROUTES: Routes = [
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'animales',component:AnimalesComponent},
{path:'animal/:id',component:AnimalComponent},
{path:'buscar/:termino',component:BuscadorComponent},
{path:'**',pathMatch:'full',redirectTo:'home'}

];
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);


