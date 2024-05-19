import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ChildComponent } from "../child/child.component";
import { Console } from 'console';

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss',
    imports: [CommonModule,
        ChildComponent,FormsModule]
})
export class ParentComponent {
    firstNameInParent="";
    msgFromChild="";

    receiveMessage(msg: string){
       this.msgFromChild=msg;
    }
}
