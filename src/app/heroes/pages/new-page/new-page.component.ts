import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/services.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Result, Root } from '../../interfaces/heroe.interface';
import { Comics, InfoComic } from '../../interfaces/comic.interface';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {
  // heroe
  hero: Result[] = []
  heroInfoComics: Comics[] = []
  heroId: number = 0;
  // stories
  stories: InfoComic[] = [];
  name: string = ''
  modified?: string
  urlImage?: string;
  // comics
  heroComicsTitles: Comics[] = []
  description: string = ''


  constructor(private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getIdHero()
    this.getInfoComics()
    this.getGenearalInfo()
  }

  /**
   * obtiene un heroe por id el cual recibe
   * por params
   */
  getIdHero() {
    this.activatedRoute.params.subscribe(data => this.heroId = data['id'])
  }

  /**
   *obtiene informacion comics los 5 primeros resultados y redirige
   */
  getInfoComics() {
    this.heroesService.getComicsHeroById(this.heroId)
      .subscribe((hero: any) => {
        if (!hero) return this.router.navigate(['/heroes/list'])
        this.heroInfoComics = hero.data.results.slice(0, 5)
        this.heroComicsTitles = hero.data.results
        return
      })
  }

  /**
   * obtiene valores del heroe desestructurados
   */
  getGenearalInfo() {
    this.heroesService.getHeroById(this.heroId)
      .subscribe((hero: any) => {
        if (!hero) return this.router.navigate(['/heroes/list'])
        //informacion heroe nombre, fecha, pathImagen , historias
        this.hero = hero.data.results
        this.stories = this.hero[0].stories.items.slice(0, 5)
        const { name, modified, description } = this.hero[0]
        const { path, extension } = this.hero[0].thumbnail
        this.name = name
        this.modified = modified
        this.description = description
        this.urlImage = `${path}.${extension}`
        return
      })
  }

  /**
 * Valida que la fecha sea valida
 * @param fecha
 * @returns
 */
  validarFecha(fecha: string) {
    if (fecha) {
      const parsedDate = new Date(fecha);
      if (!isNaN(parsedDate.getTime())) {
        const dia = parsedDate.getDate().toString().padStart(2, '0');
        const mes = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
        const año = parsedDate.getFullYear();
        return `${mes}/${dia}/${año}`;
      } else {
        return 'No existe fecha';
      }
    }
    return '';
  }

  /**
   * función volver
   */
  back() {
    this.router.navigate(['/heroes/list'])
  }

}
