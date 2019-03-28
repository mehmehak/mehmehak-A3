import { Component, OnInit } from '@angular/core';
import {mehmehak} from '../mehmehak'; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 
  currStudent: mehmehak = {

    sid: 991497502, sname: "Mehak Chatrath",
    scampus: "Davis", slogin: "mehmehak", stitle: "Assignmnet-3"

  }
  constructor() { }

  ngOnInit() {
  }

}
