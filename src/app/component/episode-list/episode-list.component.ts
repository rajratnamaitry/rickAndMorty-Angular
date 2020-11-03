import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEpisode, RickAndMortyApiService } from 'src/app/service/rick-and-morty-api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html'  
})
export class EpisodeListComponent implements OnInit {  
  public episodeList$: Observable<IEpisode[]>; 
  public pagination: object;
  constructor(private _rickAndMorty: RickAndMortyApiService) { }

  ngOnInit() {
    this.goToPage('https://rickandmortyapi.com/api/episode/');
  }
  goToPage(page: string){
    this.episodeList$ = this._rickAndMorty.getEpisodeList(page).pipe(map(data=> {
      this.pagination = data['info'];
     return data['results']
    }));
  }
}
