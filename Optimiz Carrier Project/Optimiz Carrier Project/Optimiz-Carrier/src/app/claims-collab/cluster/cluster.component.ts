import { ClusterServiceService } from './../../services/cluster-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {
  displayedColumns: string[] = ['GroupName', 'No.ofStaff', 'CreatedDate', 'SettlementAuthority', 'CargoType','Status','More'];
  dataSource : any;
  constructor(private clusterSer:ClusterServiceService) { }

  ngOnInit(): void {
this.clusterSer.getClusterData().subscribe((res)=>{
  this.dataSource= res
  console.log(this.dataSource)
})
  }

}
