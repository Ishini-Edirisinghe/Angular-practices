import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit,OnDestroy {

  counter =0;
  interval:any;

  constructor() {
    console.log("Child constructor is called")
  }

  ngOnDestroy(){
    clearInterval(this.interval);
    console.log("Child OnDestroy is called");
  }

  ngOnInit() {
    console.log("Child OnInit is called");

    this.interval=setInterval(()=>{
      this.counter=this.counter+1;
      console.log(this.counter);
    },1000);
  

  }


}
