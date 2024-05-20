import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ChildComponent } from "../child/child.component";
import { Console } from 'console';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss',
    imports: [CommonModule,
        ChildComponent,FormsModule]
})
export class ParentComponent implements OnInit{
    isChild=false;
    constructor(){
        console.log("Parent constructor is called")
       }
    
    ngOnInit(){
      console.log("Parent OnInit is called")
    
    }
    toggleChild(){
        this.isChild=!this.isChild;
    }
      
}
