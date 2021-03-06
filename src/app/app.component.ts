import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recaptchaApiBaseUrl: string = "http://localhost:8080";
  nonce: string = "UUID.UUID()";
  title = 'captcha-POC';
  recaptchaPublicKey = "6LfHcJcbAAAAAJA_kkeR4AXt92hSUpCxb-mKeWkT";
}
