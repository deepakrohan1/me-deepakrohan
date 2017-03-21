import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'che!';
  name = "deepakrohan";
  wardsColor = 'blue';
  

  changeColor(){
    this.wardsColor = this.wardsColor === 'red' ? 'blue':'red';
  }
}
