import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessengerService } from './messenger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'interceptor';

  constructor(private yourService: MessengerService) {}
  ngOnInit(): void {
    
  }

  getData() {
    this.yourService.fetchData().subscribe((data: any) => {
      console.log(data)
    }); 
  }

  getFakeData() {
    this.yourService.fetchFakeData().subscribe((data: any) => {   
    }); 
  }

}
