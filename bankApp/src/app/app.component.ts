import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterationComponent,LoginComponent], // Import only necessary modules here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Use styleUrls for multiple style files
})
export class AppComponent {
  title = 'bankApp';
}
