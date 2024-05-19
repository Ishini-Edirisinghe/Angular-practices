import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from "./parent/parent.component";  // Import FormsModule


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,
        CommonModule, // Import CommonModule here
        FormsModule, ParentComponent]
})
export class AppComponent {
  title = 'dg-stats';

 

  
}
