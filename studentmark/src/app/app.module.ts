import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { from } from 'rxjs';
import { AdmissionComponent } from './admission/admission.component';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
