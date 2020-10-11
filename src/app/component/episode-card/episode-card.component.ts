import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEpisode } from 'src/app/service/rick-and-morty-api.service';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html'
})
export class EpisodeCardComponent implements OnInit {
  @Input() episode : IEpisode[] = []
  constructor(private _route : Router) { }

  ngOnInit() {
  }
  goToEpisode(id: number){
    this._route.navigate(['./character'],{queryParams : {id} });
  }
}
