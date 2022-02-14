import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { CollectorsComponent } from './pages/collectors/collectors.component';
import { TrashtalkComponent } from './pages/trashtalk/trashtalk.component';
import { EventsComponent } from './pages/events/events.component';
import { HireComponent } from './pages/hire/hire.component';
import { HelpComponent } from './pages/help/help.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleMapsModule } from '@angular/google-maps';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VarificationComponent } from './pages/varification/varification.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgetComponent } from './pages/forget/forget.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResourcesComponent,
    CollectorsComponent,
    TrashtalkComponent,
    EventsComponent,
    HireComponent,
    HelpComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    VarificationComponent,
    LoginComponent,
    ForgetComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    GoogleMapsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
