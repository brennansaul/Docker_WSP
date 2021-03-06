/*
* File:        NodeSummary.component.ts
* Author:      Brennan Saul
* Description: Component that provides  the Swarm tab
*
* Edit history:
*
* Editor   Date		  Description
* ======   ========	===========
* Saul     7/31/17   File Created
*/

import { Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'lab-view',
  templateUrl: './labView.component.html',
  styleUrls: ['./labView.component.css']
})

export class LabViewComponent {
  labList :String[][] = [
    [ "Lab 1", "assets/docker-labs/lab1.md" ],
    [ "Lab 2", "assets/docker-labs/lab2.md" ],
    [ "Lab 3", "assets/docker-labs/lab3.md" ]
  ]

  selectedLab :String = "assets/docker-labs/lab1.md";

  public selectLab(lab: String){
    this.selectedLab = lab;
  }
}
