import { Component, OnInit } from '@angular/core';
import { RickAndMortyApiService } from 'src/app/service/rick-and-morty-api.service';
import { map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent implements OnInit {
  public characterList : [];
  constructor(private _rickAndMorty: RickAndMortyApiService, private _routeDate : ActivatedRoute) { }

  ngOnInit() {
    this._routeDate.queryParams
      .pipe(
          map(data=>data.id),
          mergeMap(id => this._rickAndMorty.getEpisodeById(id).pipe(map(data=> data['characters'])))
      )
      .subscribe((data)=> this.characterList = data);
    
  }

}
