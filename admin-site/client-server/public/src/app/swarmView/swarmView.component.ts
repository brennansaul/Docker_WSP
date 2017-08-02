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

  greeting: string = 'Welcome!';
  message: string = 'Select a Node to inspect it!';

  selectedNode: String;

  // For Testing and development
  nodeList :String[] = [
    "pi-manager",
    "pi-worker1",
    "pi-worker2",
    "pi-worker3",
  ]

  allContainers :Container[];

  // For Testing and Development
  containerList :Container[] = [
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



  /*Functions*/

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

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000'


  // Declare empty list of people
  containers: any[] = [];

  constructor(private http: Http) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllContainers();
  }

  // Add one Container to the API
  /*
  addContainer(name, age) {
    this.http.post(`${this.API}/containers`, {cid, views, node})
      .map(res => res.json())
      .subscribe(() => {
        this.getAllContainers();
      })
  }
  */

  // Get all users from the API
  getAllContainers() {
    this.http.get(`${this.API}/containers`)
      .map(res => res.json())
      .subscribe(containers => {
        console.log(containers)
        this.containers = containers
      })
  }




}
