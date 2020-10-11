import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodeListComponent } from './component/episode-list/episode-list.component';
import { CharacterListComponent } from './component/character-list/character-list.component';
import { CharacterCardComponent } from './component/character-card/character-card.component';
import { EpisodeCardComponent } from './component/episode-card/episode-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent,
    CharacterListComponent,
    CharacterCardComponent,
    EpisodeCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
