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

import { Container } from '../../shared/models/container'

@Component({
  selector: 'node-summary',
  templateUrl: './nodeSummary.component.html',
  styleUrls: ['./nodeSummary.component.css']
})

export class NodeSummaryComponent {

  @Input() node: string;

  containerList :Container[]  = [];
  // For Testing and Development
  allContainers :Container[] = [
    { cid: "1111111111", views: 0, node: "pi-manager" },
    { cid: "2222222222", views: 0, node: "pi-worker1" },
    { cid: "3333333333", views: 0, node: "pi-worker2" },
    { cid: "4444444444", views: 0, node: "pi-worker3" },
    { cid: "5555555555", views: 0, node: "pi-manager" },
    { cid: "6666666666", views: 0, node: "pi-worker1" },
    { cid: "7777777777", views: 0, node: "pi-worker2" },
    { cid: "8888888888", views: 0, node: "pi-worker3" },
    { cid: "9999999999", views: 0, node: "pi-manager" },
    { cid: "1010101010", views: 0, node: "pi-worker1" },
    { cid: "1101101101", views: 0, node: "pi-worker2" },
    { cid: "1212121212", views: 0, node: "pi-worker3" },
    { cid: "1313131313", views: 0, node: "pi-manager" },
    { cid: "1414141141", views: 0, node: "pi-worker1" },
    { cid: "1515151515", views: 0, node: "pi-worker2" },
    { cid: "1616161616", views: 0, node: "pi-worker3" },
  ]


ngOnChanges(changes) {
      this.getAllContainers()
}


  // Send request to get list of all buttons in the database
getAllContainers(): void {
  // Call the API and store returned list of buttons in the array
      //this.buttonService.getAllButtons().subscribe(buttons => {
          this.containerList = this.allContainers;
          //this.containerList = containers
          //this.allContainers = containers
          this.filterContainers();
}

private filterContainers(): void {
        this.containerList = this.allContainers;
        // debugging
        /*console.log(this.allContainers);

        if(this.node === "pi-manager"){
          console.log("yes");
        }
        else{
          console.log("no its " + this.node);
        } */
        this.containerList = this.containerList.filter(
            container => container.node === this.node
        );
        //console.log(this.containerList);
}

}
