import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { SwarmViewComponent } from './swarmView/swarmView.component'
import { NodeSummaryComponent } from './swarmView/nodeSummary/nodeSummary.component'
import { AboutComponent } from './about/about.component'

// Routes
const appRoutes: Routes = [
  { path: '', component: SwarmViewComponent },
  //{ path: 'skills', component: SkillsComponent },
  //{ path: 'experiences', component: ExperiencesComponent },
  { path: 'about', component: AboutComponent },
  //{ path: 'resume', component: ResumeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwarmViewComponent,
    NodeSummaryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
