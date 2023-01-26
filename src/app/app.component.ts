import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { HttpService } from './services/http-service';
import { StoreFacade } from './_store/_store-facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coding-tools';

  constructor(
    private readonly httpService: HttpService,
    private readonly storeFacade: StoreFacade) {

  }

  sendMessage(message: string): void {
    this.httpService.sendMessage(message).pipe(
      tap(x => {
        console.log(x);
        this.updateSearchValue(x.toString());
      })
    ).subscribe();
  }

  updateSearchValue(searchValue: string): void {
    this.storeFacade.updateSearchValue(searchValue);
  }
}
