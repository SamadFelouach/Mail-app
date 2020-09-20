import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home-manage',
  templateUrl: './home-manage.component.html',
  styleUrls: ['./home-manage.component.css']
})
export class HomeManageComponent implements OnInit {
 public client :Client;
 test=0;

  constructor() {
    this.client = new Client();
  }

  ngOnInit(): void {
  }

  saveclient(value: any) {

  }

  showOptimalForm() {
    return this.test=1;
  }
}

export class Client{

  //personal infos
  first_name: string = '';
  last_name: string = '';
  email_address: string = '';
  phone_number: string = '';

  //property infos
  propertyType: string = '';
  floor: string = '';
  finishing: string = '';
  bedrooms: string = '';
  bedroomsMore: string = '';
  bathrooms: string = '';
  size: string = '';
  balconyTerrace: boolean = false;
  balconySize: string = '';
  guests:number = 0;
  beds:number = 0;
  plotArea:string = '';

  //user's type infos: "BUYER" or "OWNER"
  user_type: string = '';
}
