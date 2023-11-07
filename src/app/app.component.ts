import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { password } from './interfaces/password';
import { GeneratePasswordService } from './services/generate-password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  length: number = 12;
  password: string = '';

  constructor (private generatePasswordService: GeneratePasswordService) {}

  generatePass(): void {
    this.generatePasswordService.getPassword(this.length).subscribe(data => this.password = data.random_password);
  }
}
