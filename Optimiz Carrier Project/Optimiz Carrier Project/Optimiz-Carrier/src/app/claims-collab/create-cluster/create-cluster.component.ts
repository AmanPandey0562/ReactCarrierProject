import { ClusterServiceService } from './../../services/cluster-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-cluster',
  templateUrl: './create-cluster.component.html',
  styleUrls: ['./create-cluster.component.css']
})
export class CreateClusterComponent implements OnInit {

  clusterData: any;
  constructor(private clusterSer: ClusterServiceService) { }

  ngOnInit(): void {
  }

  clusterForm = new FormGroup({
    clusterName: new FormControl(''),
    min: new FormControl(''),
    max: new FormControl(''),
    currency: new FormControl(''),
    location: new FormControl(''),
    cargoType: new FormControl(''),
    portLoad: new FormControl(''),
    portDischarge: new FormControl(''),
    addStaff: new FormControl(''),
    status: new FormControl('')
  });

  formData() {
    this.clusterData = this.clusterForm.value;
    this.clusterSer.sendClusterData(this.clusterData).subscribe((res) => {
      console.log(res)
    })
    Swal.fire("New Cluster Created");
  }

}
