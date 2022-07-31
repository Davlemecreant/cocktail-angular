import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'produits',component:ProduitsComponent},
  {path:'contact',component:ContactComponent},
  {path:'apropos',component:AproposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
