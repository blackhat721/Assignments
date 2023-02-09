import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApicallsService } from '../../services/apicalls.service'
@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent{
  getUsers:any;
  constructor(private apiCalls : ApicallsService) {
    // this.getData();
  }
  
  OnClick(){
    this.apiCalls.GetUsers().subscribe((data)=>{
      console.log(data);
      this.getUsers = data;
    })
  }
  OnClickBirth(){
    this.apiCalls.Getbirth().subscribe((data)=>{
      console.log(data);
    })
  }
}