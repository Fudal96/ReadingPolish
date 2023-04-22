import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DndModule} from 'ngx-drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { A1storiesComponent } from './pages/a1stories/a1stories.component';
import { A1CoLubieRobicComponent } from './a1stories/a1-co-lubie-robic/a1-co-lubie-robic.component';
import { A2storiesComponent } from './pages/a2stories/a2stories.component';
import { B1storiesComponent } from './pages/b1stories/b1stories.component';
import { B2storiesComponent } from './pages/b2stories/b2stories.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    A1storiesComponent,
    A1CoLubieRobicComponent,
    A2storiesComponent,
    B1storiesComponent,
    B2storiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabsModule,
    SortableModule.forRoot(),
    FormsModule,
    DndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
