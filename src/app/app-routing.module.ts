import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { A1CoLubieRobicComponent } from './a1stories/a1-co-lubie-robic/a1-co-lubie-robic.component';

const routes: Routes = [
  {path: 'ReadingPolish', component: HomeComponent},
  {path: 'ReadingPolish/a1-co-lubie-robic', component: A1CoLubieRobicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
