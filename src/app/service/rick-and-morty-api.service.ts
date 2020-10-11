import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApiService {
  private _baseUrl : string  = 'https://rickandmortyapi.com/api/';
  constructor(private _api: HttpClient) {  }
  getEpisodeList(page: string){    
   return this._api.get(page);
  }

  getEpisodeById(id: number){
    return this._api.get(this._baseUrl+ 'episode/'+id);
  }

  getCharacterList(){
    return this._api.get(this._baseUrl+ 'character/');
  }

  getCharacterById(id: number){
    return this._api.get(this._baseUrl+ 'character/'+id);
  }
}
export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}
