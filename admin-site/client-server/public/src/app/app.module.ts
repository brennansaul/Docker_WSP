import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { SwarmViewComponent } from './swarmView/swarmView.component'
import { NodeSummaryComponent } from './swarmView/nodeSummary/nodeSummary.component'
import { AboutComponent } from './about/about.component'
import { LabViewComponent } from './labView/labView.component'
import { VisualizerComponent } from './visualizer/visualizer.component'

// Routes
const appRoutes: Routes = [
  { path: '', component: SwarmViewComponent },
  { path: 'visualizer', component: VisualizerComponent },
  { path: 'labs', component: LabViewComponent },
  { path: 'about', component: AboutComponent },
  //{ path: 'resume', component: ResumeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwarmViewComponent,
    NodeSummaryComponent,
    AboutComponent,
    LabViewComponent,
    VisualizerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    MarkdownToHtmlModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
