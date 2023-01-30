import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  @Output() callApiButtonClicked = new EventEmitter<string>();

  callApiButton(message: string): void {
    this.callApiButtonClicked.emit(message);
  }
}
