import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { SwarmViewComponent } from './swarmView/swarmView.component'
import { NodeSummaryComponent } from './swarmView/nodeSummary/nodeSummary.component'
// Routes
const appRoutes: Routes = [
  { path: '', component: SwarmViewComponent },
  //{ path: 'skills', component: SkillsComponent },
  //{ path: 'experiences', component: ExperiencesComponent },
  //{ path: 'projects', component: ProjectComponent },
  //{ path: 'resume', component: ResumeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwarmViewComponent,
    NodeSummaryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
