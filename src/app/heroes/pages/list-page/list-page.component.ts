import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/services.service';
import { Result, Root } from '../../interfaces/heroe.interface';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  //array heroes
  heroes: Result[] = [];

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.getHeros()
  }

  /**
   *obtiene todos los heroes
   */
  getHeros() {
    this.heroesService.getHeros().subscribe((data: Root) => this.heroes = data.data.results)
  }

  /**
   *obtiene un heroe por su id
   * @param id
   */
  getHerosById(id: number) {
    this.heroesService.getHeroById(id).subscribe((data: Root) => this.heroes = data.data.results)
  }
}
