import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecipesModule } from '../recipes/recipes.module';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    HttpClientModule,
    RecipesModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  exports: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
