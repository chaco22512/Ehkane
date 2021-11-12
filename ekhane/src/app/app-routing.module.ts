import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResourcesComponent } from './pages/resources/resources.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'collectors', component: HomeComponent},
  {path: 'trashtalk', component: HomeComponent},
  {path: 'events', component: HomeComponent},
  {path: 'hire', component: HomeComponent},
  {path: 'help', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
