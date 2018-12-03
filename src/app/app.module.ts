import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MusicComponent } from './music/music.component';
import { ForumComponent } from './forum/forum.component';
import { MerchComponent } from './merch/merch.component';


const appRoutes: Routes = [
  { path: 'music', component: MusicComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'about', component: TestcompComponent },
  { path: 'merch', component: MerchComponent },
  { path: '',
    redirectTo: '/music',
    pathMatch: 'full'
  },
  { path: '**', component: MusicComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestcompComponent,
    NavbarComponent,
    FooterComponent,
    MusicComponent,
    ForumComponent,
    MerchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
