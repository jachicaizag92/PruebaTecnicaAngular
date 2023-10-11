import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

import { HeroesService } from '../../services/services.service';
import { suggestions } from '../../suggestions-data/suggestions';
import { Result } from '../../interfaces/heroe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  // formcontrol busqueda
  search = new FormControl('')

  //suggestions
  filteredSuggestions!: Observable<string[]>;
  suggestions: string[] = suggestions

  // array heroes
  hero: Result[] = [];
  existingRecords: { name: string }[] = [];

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) {
    this.filteredSuggest()
  }

  ngOnInit(): void {
    const existingRecords = JSON.parse(localStorage.getItem('records') || '[]');
    this.existingRecords = existingRecords;
  }

  //metodos del componente



  /**
   * cargar sugerencias al buscar
   */
  filteredSuggest() {
    this.filteredSuggestions = this.search.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value))
    );
  }

  /**
   * metodo privado para filtar sugerencias al buscar
   * @param value
   * @returns
   */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(filterValue)
    );
  }

  /**
   * buscar y valida el valor del input buscar
   * tambien guarda en el localStorage
   */
  onSearch() {
    const value = this.search.value?.trim();
    if (value && value.length > 0) {
      this.getheroByName(value);
      if (!this.existingRecords.some(item => item.name === value)) {
        this.existingRecords.push({ name: value });
        localStorage.setItem('records', JSON.stringify(this.existingRecords));
        this.search.reset('');
      }
    }
  }

  /**
   * obtiene datos heroe por el nombre
   * @param name
   */
  getheroByName(name: string) {
    this.heroesService.getHeroByName(name).subscribe(
      data => {
        this.hero = data.data.results
      }
    )
  }

  /**
   * manejador
   * @param value
   */
  onChipClick(value: { name: string }) {
    this.getheroByName(value.name)
  }

    /**
   * función volver
   */
    back() {
      this.router.navigate(['/heroes/list'])
    }
}
