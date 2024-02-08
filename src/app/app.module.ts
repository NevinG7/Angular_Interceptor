import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { myintercept } from "./interceptor";
import { ToastrService, provideToastr } from "ngx-toastr";
import { provideAnimations } from '@angular/platform-browser/animations';




@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      CommonModule ,
      BrowserModule,
      RouterOutlet,
      HttpClientModule,
    
    ],
    providers:[
        { provide: HTTP_INTERCEPTORS, useClass: myintercept, multi: true },
        provideAnimations(),
        provideToastr(),
        
    ],
    bootstrap: [
      AppComponent
    ]
  })
  export class AppModule { }
  