import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
