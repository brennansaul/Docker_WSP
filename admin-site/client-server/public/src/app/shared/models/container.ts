/*
* File:        contianer.ts
* Author:      Brennan Saul
* Description: Contianer class that represents what would be stored in the
*              mongoDB consits of:
*              + cid - Container ID
*              + views - the number of times the container's webpage  has been visited
*              + node - the docker swarm node that the continare is hosted on
* Edit history:
*
* Editor   Date		  Description
* ======   ========	===========
* Saul     8/1/17   File Created
*/

export class Container {
    public cid: String;
    public views: number;
    public node: String;

    constructor() {
      this.cid = "ID has not been defined";
      this.views = 0;
      this.node = "Node has not been defined";
    }
}
