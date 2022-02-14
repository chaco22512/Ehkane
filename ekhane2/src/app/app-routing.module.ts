import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { CollectorsComponent } from './pages/collectors/collectors.component';
import { TrashtalkComponent } from './pages/trashtalk/trashtalk.component';
import { EventsComponent } from './pages/events/events.component';
import { HireComponent } from './pages/hire/hire.component';
import { HelpComponent } from './pages/help/help.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VarificationComponent } from './pages/varification/varification.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'collectors', component: CollectorsComponent},
  {path: 'trashtalk', component: TrashtalkComponent},
  {path: 'events', component: EventsComponent},
  {path: 'hire', component: HireComponent},
  {path: 'help', component: HelpComponent},
  {path: 'varification', component: VarificationComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'forget', component: ForgetComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
