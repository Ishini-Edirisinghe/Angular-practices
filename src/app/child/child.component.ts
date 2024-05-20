import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {
  constructor(){
    console.log("Child constructor is called")
   }

ngOnInit(){
  console.log("Child OnInit is called")

}

  
}
