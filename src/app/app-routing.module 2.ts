import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BookmarkedComponent } from './components/bookmarked/bookmarked.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TvComponent } from './components/tv/tv.component';

const routes: Routes = [
  {
    path: '',
    title: 'Login page',
    component: LoginComponent,
  },
  { path: 'bookmarked', component: BookmarkedComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'tv', component: TvComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
