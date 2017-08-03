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

  // Variable passed from SwarmViewComponent
  @Input() node: string;


  /***** Elements for the Welcome Display *****/
  greeting: string = 'Welcome!';
  message: string = 'Select a Node to inspect it!';


  /****** Elements for Node summary Display *****/
  containerList :Container[]  = [];
  // For Testing and Development
  allContainers :Container[] = [
    { cid: "1111111111", views: 1, node: "pi-manager" },
    { cid: "2222222222", views: 3, node: "pi-worker1" },
    { cid: "3333333333", views: 3, node: "pi-worker2" },
    { cid: "4444444444", views: 2, node: "pi-worker3" },
    { cid: "5555555555", views: 1, node: "pi-manager" },
    { cid: "6666666666", views: 6, node: "pi-worker1" },
    { cid: "7777777777", views: 3, node: "pi-worker2" },
    { cid: "8888888888", views: 2, node: "pi-worker3" },
    { cid: "9999999999", views: 5, node: "pi-manager" },
    { cid: "1010101010", views: 4, node: "pi-worker1" },
    { cid: "1101101101", views: 2, node: "pi-worker2" },
    { cid: "1212121212", views: 1, node: "pi-worker3" },
    { cid: "1313131313", views: 1, node: "pi-manager" },
    { cid: "1414141141", views: 1, node: "pi-worker1" },
    { cid: "1515151515", views: 4, node: "pi-worker2" },
    { cid: "1616161616", views: 6, node: "pi-worker3" },
    { cid: "1717171717", views: 4, node: "pi-manager" },
    { cid: "1818181818", views: 3, node: "pi-manager" },
    { cid: "1919191919", views: 6, node: "pi-worker2" },
    { cid: "2020202020", views: 3, node: "pi-worker3" },
  ]

/*
* ngOnChnages
* Executes everytime the value of input variable "node" changes.
*/
ngOnChanges(changes) {
    this.getAllContainers()
}


/*
* getAllContainers
* Sends request to get a list of all containers in the MongoDB.
* Next function calls filterContainers which populate conainersList with
* containers with a node value equal to the value of input variable node.
*
* Right now this function pulls initail list of container from hardcoded example
*/
getAllContainers(): void {
  // Call the API and store returned list of buttons in the array
    //this.buttonService.getAllButtons().subscribe(buttons => {
        this.containerList = this.allContainers;
        //this.containerList = containers
        //this.allContainers = containers
        this.filterContainers();
}

/*
* filterContainers()
* Populates conainersList with the containercontainers with a node value equal to the value
* of input variable node.
*/
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
    //console.log(this.containerList.length)
    //console.log(this.containerList);
}

}
