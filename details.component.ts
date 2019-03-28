import { Component, OnInit } from '@angular/core';
import { MYCLASSES } from '../mySongs';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  myclasses = MYCLASSES;
  constructor() { }

  onClickMe(index){

    var divs = document.getElementById("myList").getElementsByTagName("div");
    if(divs[index].style.display === 'none'){
      divs[index].style.display = 'block';
    }
    else {
      divs[index].style.display = 'none';
    }
  }
  ngOnInit() {
  }

  
  ngAfterViewInit() {
    var divs = document.getElementById("myList").getElementsByTagName("div");
    /* create an array div's in myList */

    for(let x=0; x < divs.length; x++){
      divs[x].style.display="none";
    }
  }
}
