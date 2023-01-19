import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ArticulosComponent} from "./pages/articulos/articulos.component";
import {EstadisticasComponent} from "./pages/estadisticas/estadisticas.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'articulos', component: ArticulosComponent},
  {path: 'estadisticas', component: EstadisticasComponent},
  {path: '', redirectTo: '/home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
