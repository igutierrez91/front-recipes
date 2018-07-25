import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map, timeout } from 'rxjs/operators';
import { Recipe } from '../entities/recipe';

@Injectable()
export class RecipeService {

  private readonly API_URL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getRecipeByTerm(term): Observable <Recipe []> {
    const params: any = {'q': term};
    return this.http.get(this.API_URL, {params: params}).pipe(
      map((response: any) => response.results)
    );
  }
}
