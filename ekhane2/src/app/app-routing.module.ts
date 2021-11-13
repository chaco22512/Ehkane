import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { CollectorsComponent } from './pages/collectors/collectors.component';
import { TrashtalkComponent } from './pages/trashtalk/trashtalk.component';
import { EventsComponent } from './pages/events/events.component';
import { HireComponent } from './pages/hire/hire.component';
import { HelpComponent } from './pages/help/help.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'collectors', component: CollectorsComponent},
  {path: 'trashtalk', component: TrashtalkComponent},
  {path: 'events', component: EventsComponent},
  {path: 'hire', component: HireComponent},
  {path: 'help', component: HelpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
