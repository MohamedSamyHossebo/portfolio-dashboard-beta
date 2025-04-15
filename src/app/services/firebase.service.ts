// src/app/firebase.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, getFirestore, addDoc } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { Observable, from } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private firestoreDb: Firestore;

  constructor() {
    // Initialize Firebase
    const app = initializeApp(environment.firebaseConfig);
    this.firestoreDb = getFirestore(app);
  }

  getData(): Observable<any[]> {
    const itemsCollection = collection(this.firestoreDb, 'projects');
    return from(
      getDocs(itemsCollection).then(snapshot => 
        snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      )
    );
  }

  async addProject(projectData: any): Promise<any> {
    const projectsCollection = collection(this.firestoreDb, 'projects');
    return addDoc(projectsCollection, projectData);
  }


}
