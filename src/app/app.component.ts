import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,
              CommonModule, // Import CommonModule here
              FormsModule,
              HeaderComponent, 
              SidenavComponent,
              MainComponent, 
              FooterComponent]
})
export class AppComponent {
  title = 'dg-stats';
  numbers=[
    'one','two','three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten'
  ];
  luckyNumber=0;

  isApproved=false;
  
  approve(status: boolean){
    this.isApproved=status;
  }
}
