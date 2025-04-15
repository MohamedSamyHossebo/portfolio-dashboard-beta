// Suggested code may be subject to a license. Learn more: ~LicenseLog:2197286316.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:197803722.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3015310453.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProjectComponent implements OnInit {



  projectForm: FormGroup;

  private changeDetectorRef = inject(ChangeDetectorRef);
  constructor(private fb: FormBuilder, private firebaseService: FirebaseService,) {
    this.projectForm = this.fb.group({
      project_Name: ['', Validators.required],
      image: ['', Validators.required],
      project_details: ['', Validators.required],
      projectLink: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    
  }
  addProject() {
    if (this.projectForm.valid) {
      const newProject = this.projectForm.value;
      this.firebaseService.addProject(newProject).then(() => {
        console.log('Project added successfully!');
        this.projectForm.reset();
        this.changeDetectorRef.detectChanges()
      }).catch((error) => {
        console.error('Error adding project: ', error);
      });
    }
  }
}


