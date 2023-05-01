import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Array<Vehicle> = [];
  marcas: {[key:string]:number} = {};

  constructor(private vehicleService: VehicleService) { }

  getVehicles(): void{
    this.vehicleService.getVehicles().subscribe((vehicles)=>{
      this.vehicles = vehicles;
      this.getMarcas();
    });
  }

  get myMarcas(): string[]{
    return Object.keys(this.marcas);
  }
  getMarcas(): void{
    for (const v of this.vehicles){
      if(!(v.marca in this.marcas )){
        this.marcas[v.marca]=1
      }
      else{
        this.marcas[v.marca]+=1
      }
    }

  }
  ngOnInit() {
    this.getVehicles();

  }

}
