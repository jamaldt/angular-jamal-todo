import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //messages = this.http.get<any[]> ('http://localhost:4201');
  //constructor(private http:HttpClient){}

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'Empezamos!';
  }

  values = '';
  value = '';
  
  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
 
  onEnter(value: string) { this.value = value; }
}
