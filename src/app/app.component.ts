import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, SidenavComponent, MainComponent, FooterComponent]
})
export class AppComponent {
  title = 'dg-stats';
  firstName="Dammi";
  imagepath="assets/pic.jpeg";
}
