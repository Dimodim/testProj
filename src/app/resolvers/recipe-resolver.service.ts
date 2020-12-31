import { RecipeService } from './../services/recipe.service';
import { Observable, of } from 'rxjs';
import { DataStorageService } from './../shared/data-storage.service';
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from '../models/recipe';

@Injectable({
    providedIn: 'root',
})
export class RecipeResolverService implements Resolve<Array<Recipe>> {
    constructor(
        private dataStorageService: DataStorageService,
        private recipeService: RecipeService
    ) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Array<Recipe>> {
        if (this.recipeService.recipes.length > 0) {
            return of(this.recipeService.recipes);
        } else {
            return this.dataStorageService.getRecipes();
        }
    }
}
