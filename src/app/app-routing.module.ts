import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/recipes', pathMatch: 'full' },
  { path: '**',   redirectTo: 'recipes' },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
