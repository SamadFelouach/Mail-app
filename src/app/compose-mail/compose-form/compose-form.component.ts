import { Component, OnInit } from '@angular/core';
import { MailService } from '../../global-data/mail-service/mail-service.service';

@Component({
  selector: 'app-compose-form',
  templateUrl: './compose-form.component.html',
  styleUrls: ['./compose-form.component.css']
})
export class ComposeFormComponent implements OnInit {
  public contactsList: Array<any>
  constructor(private mailService: MailService) { }

  ngOnInit(): void {
  }
  refreshList(){
    this.contactsList = this.mailService.getContactsList()
    console.log(this.contactsList);
    
  }
  ping(){
    this.mailService.ping(this.contactsList).subscribe((res)=>{
      console.log(res);      
    })
  }
}
