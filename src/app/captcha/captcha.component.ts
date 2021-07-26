import { Component, OnInit, Renderer2, Output, Input,EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CaptchaDataService } from './captcha-data.service';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

  @Input('apiBaseUrl') apiBaseUrl: string;
  @Input('nonce') nonce: string;

  @Output() onValidToken = new EventEmitter<string>();

  constructor( private dataService: CaptchaDataService, private _renderer: Renderer2, private _http: HttpClient ) { }

  ngOnInit():void {
    let script = this._renderer.createElement('script');
    script.defer = true;
    script.async = true;
    script.src = "https://www.google.com/recaptcha/api.js";
    this._renderer.appendChild(document.body, script);
  }

  resolved(token:string){
    console.log(token);
    const nonce = "nonce";
    // this._http.post('localhost:8080', { token, nonce }).subscribe(
    //   res => {
    //     console.log("success?", res);
    //   }
    // )
    this.dataService.verifyCaptcha(this.apiBaseUrl, this.nonce, token).subscribe(response => {
      const payload = response.body;

    });
  }
}
