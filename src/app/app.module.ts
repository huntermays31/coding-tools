import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/http-service';
import { mainPageReducer } from './_store/main-page/main-page.reducer';
import { mainPageFeatureKey } from './_store/main-page/main-page.selectors';
import { StoreFacade } from './_store/_store-facade';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(mainPageFeatureKey, mainPageReducer ),
    StoreDevtoolsModule.instrument({
      name: 'ABS DevTools',
      maxAge: 25,
      logOnly: true
    }),
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpService,
    StoreFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
