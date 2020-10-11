import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterCardComponent } from './component/character-card/character-card.component';
import { CharacterListComponent } from './component/character-list/character-list.component';
import { EpisodeListComponent } from './component/episode-list/episode-list.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'episode'
},{
  path: 'episode',
  component: EpisodeListComponent
}, {
  path: 'character',
  component: CharacterListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
