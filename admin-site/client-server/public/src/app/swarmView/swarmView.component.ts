/*
* File:        swarmView.component.ts
* Author:      Brennan Saul
* Description: Component that displays the Swarm tab
*
* Edit history:
*
* Editor   Date		  Description
* ======   ========	===========
* Saul     7/31/17   File Created
*/

import { Component } from "@angular/core";
import { Http } from '@angular/http';

import { Container } from '../shared/models/container'

// Import rxjs map operator
import 'rxjs/add/operator/map';


@Component({
    selector: 'swarm-view',
    templateUrl: './swarmView.component.html',
    styleUrls: ['./swarmView.component.css']
})

export class SwarmViewComponent {

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000'


  filteredContainer: any[] = [];

  constructor(private http: Http) {}

  selectedNode: String;

  // For Testing and development
  nodeList :string[] = [
    "pi-manager",
    "pi-worker1",
    "pi-worker2",
    "pi-worker3",
  ]

  containerList :Container[] = [];
  // For Testing and Development
  /*
  containerList :Container[] = [
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
  */


  /*Functions*/

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllContainers();
  }

  /*
  * Function: selectNode()
  *
  * SelectNode is called when a node in the list is clicked.
  * The node that is clicked is then passed to the node-summary component
	*/
	selectNode(node){
		this.selectedNode = node;
		console.log(this.selectedNode);
	}

  // Add one Container to the API
  public addContainer(cid, views, node) {
    this.http.post(`${this.API}/containers`, {cid, views, node})
      .map(res => res.json())
      .subscribe(() => {
        this.getAllContainers();
      })
  }

  // Get all users from the API
  public getAllContainers() {
    this.http.get(`${this.API}/containers`)
      .map(res => res.json())
      .subscribe(containers => {
        //console.log(containers)
        this.containerList = containers
      })
  }

  public getNumContainers(node: String): number {
    //console.log(node);
    this.filteredContainer = this.containerList.filter(
        container => container.node === node
    );
    //console.log(this.filteredContainer)
    return this.filteredContainer.length;
  }

  public getTotalViews(node: String): number {
    //console.log(node);
    this.filteredContainer = this.containerList.filter(
        container => container.node === node
    );
    //console.log(this.filteredContainer)
    var total = 0;
    for(var i=0; i < this.filteredContainer.length; i++){
        total += this.filteredContainer[i].views;
    }

    return total;
  }




}
