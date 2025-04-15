import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  firebaseService = inject(FirebaseService);
  projects: any[] = []
  ngOnInit() {
    this.displayData();
  }

  displayData(): any {
    //   const dataObservable = this.firebaseService.getData();
    //   dataObservable.subscribe((data) => {
    //     this.projects = data;
    //     console.log("Data fetched from Firebase ==>", data);
    //   });
    // }
    this.firebaseService.getData().subscribe((data) => {
      this.projects = data;
      console.log("Data fetched from Firebase ==>", data);
    });
  }
}