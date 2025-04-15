import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page

];
