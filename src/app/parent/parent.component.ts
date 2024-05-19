import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ChildComponent } from "../child/child.component";

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
}
