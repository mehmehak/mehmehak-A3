import { Component, OnInit } from '@angular/core';
import {mehmehak} from '../mehmehak'; 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currStudent: mehmehak = {

    sid: 991497502, sname: "Mehak Chatrath",
    scampus: "Davis", slogin: "mehmehak", stitle: "Assignmnet-3"

  }
  constructor() { }

  ngOnInit() {
  }

}
