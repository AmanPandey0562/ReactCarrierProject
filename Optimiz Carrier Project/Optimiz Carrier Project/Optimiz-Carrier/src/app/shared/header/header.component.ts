import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';

import { MatTreeNestedDataSource } from '@angular/material/tree';


interface FoodNode {
  name: string;
  children?: any;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Claims Center',
    children: [{ name: 'Claims',rout:"claimsCenter/claims" }, { name: 'Offer',rout:"claimsCenter/offer" }, { name: 'Draft',rout:"claimsCenter/drafts" },{name:'Archieve',rout:"claimsCenter/archieve"}],
  },
];
const colaboration= [
  {
    name: 'Claims Collaboration',
    children: [{ name: 'Staff Management',rout:"/claimsCollab/staffManagement" }, { name: 'Staff Performance',rout:"claimsCollab/staffPerformance" }, { name: 'Clusters',rout:"claimsCollab/cluster", }],
  },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {  this.dataSource.data = TREE_DATA;
    this.dataSource1.data =colaboration ; }

  ngOnInit(): void {
  }

  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  treeControl1 = new NestedTreeControl<FoodNode>((node1) => node1.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  dataSource1 = new MatTreeNestedDataSource<FoodNode>();

  hasChild = (_: number, node: FoodNode) =>
  !!node.children && node.children.length > 0;
  hasChild1 = (_: number, node1: FoodNode) =>
  !!node1.children && node1.children.length > 0;

}
