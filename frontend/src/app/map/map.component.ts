import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../service/userservice.service'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
   latitude=51.678418
   logitude=7.809007
   userdetails
  constructor(private userservice:UserserviceService) { }

  ngOnInit(): void {
    this.userservice.getuser().subscribe(
      res=>{
        this.userdetails=res['user']
      },
      err=>{
        console.log(err)
      }
    )
  }
onChoseLocation(){
  console.log(event)
}
}
