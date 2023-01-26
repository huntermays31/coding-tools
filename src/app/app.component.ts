import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { HttpService } from './services/http-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coding-tools';

  constructor(private readonly httpService: HttpService) {

  }

  callApi(): void {
    this.httpService.callApi().pipe(
      tap(x => {
        console.log(x)
      })
    ).subscribe();
  }
}
