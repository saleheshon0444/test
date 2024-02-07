import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainDataService {
  constructor() {}
  // just for saving some where 
  userNaame = ''
  passWoord = ''
  contentseleceted = false;
  clicked(arg:boolean){
    this.contentseleceted = arg
  }
  submitApplication(userName: string, passWord: string) {
    this.userNaame = userName
    this.passWoord = passWord
    console.log(this.userNaame ,this.passWoord);
  }
}
