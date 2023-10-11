import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { environments } from 'src/environments/enviroment';
import { Root } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  //baseUrl, key, hash
  baseUrl: string = environments.baseUrl
  hashMd5: string = '13ea4bc7546b492c9da79eb2bbdfcc31'
  apiKey: string = '517a777df41563b4609a9887ef0f2526'

  constructor(private http: HttpClient) {
  }

  /**
   * llamado api, obtener todos los heroes
   * @returns
   */
  getHeros(): Observable<any> {
    return this.http.get<Root>(`${this.baseUrl}/public/characters?&ts=1&apikey=${this.apiKey}&hash=${this.hashMd5}`)
      .pipe(
        catchError(error => of(false))
      )
  }

  /**
   * llamado api, obtener heroes por id
   * @param id
   * @returns
   */
  getHeroById(id: number): Observable<any> {
    return this.http.get<Root>(`${this.baseUrl}/public/characters/${id}?&ts=1&apikey=${this.apiKey}&hash=${this.hashMd5}`)
      .pipe(
        catchError(error => of(false))
      )
  }

  /**
   * llamado api, obtener heroes por nombre
   * @param name
   * @returns
   */
  getHeroByName(name: string): Observable<any> {
    return this.http.get<Root>(`${this.baseUrl}/public/characters?name=${name}&ts=1&apikey=${this.apiKey}&hash=${this.hashMd5}`)
      .pipe(
        catchError(error => of(false))
      )

    /**
     * llamado api, obtenerComics por id
     */
  }
  getComicsHeroById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/public/characters/${id}/comics?&ts=1&apikey=${this.apiKey}&hash=${this.hashMd5}`)
      .pipe(
        catchError(error => of(false))
      )
  }

}
