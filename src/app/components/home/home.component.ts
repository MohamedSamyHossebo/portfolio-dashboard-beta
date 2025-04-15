import { Component, inject, OnInit, Type } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from '../add-project/add-project.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule,AddProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  firebaseService = inject(FirebaseService);
  projects: any[] = []
  ngOnInit() {
    this.displayData();
  }

  displayData(): void {
    this.firebaseService.getData().subscribe((data) => {
      this.projects = data;
      console.log('Data fetched from Firebase ==>', data);
    });
  }
}