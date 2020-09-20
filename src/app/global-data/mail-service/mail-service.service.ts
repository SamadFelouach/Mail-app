import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaillData} from './mail-service.model';
import { HttpClient } from '@angular/common/http';
import {timeout} from 'rxjs/operators';

@Injectable()
export class MailService {
    private globalData: MaillData = new MaillData();

    constructor(private http: HttpClient) {
    }

    getCsvSample(): Observable<any> {
      return this.http.get<any>('http://127.0.0.1:5000/get_modal_csv')
    }
    ping(list: any): Observable<any> {
      return this.http.post<any>('http://127.0.0.1:5000/ping_email_list', list)
    }
    getContactsList(): any{
      return this.globalData.contactsList
    }
    setContactsList(list: Array<any>): any{
      this.globalData.contactsList = list
    }
}
