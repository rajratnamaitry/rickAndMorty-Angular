import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html'
})
export class CharacterCardComponent implements OnInit {
  @Input() characterUrl;
  public character;
  constructor(private _api : HttpClient) { }

  ngOnInit() {
    this._api.get(this.characterUrl).subscribe(data=>{
      this.character = data;
    })
  }

}
