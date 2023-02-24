import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainFrComponent } from './Netflix-landing/main-landing/main-landing.component';
import { PageOneComponent } from './WhantToKnowMore/Page1/pageOne.component';
import { PageTwoComponent } from './WhantToKnowMore/Page2/PageTwo.component';
import { PageThreeComponent } from './WhantToKnowMore/Page3/PageThree.component';
import { PageFourComponent } from './WhantToKnowMore/Page4/PageFour.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'fr',
    pathMatch: 'full',
  },
  {
    path: 'fr',
    children: [
      { path: '', component: MainFrComponent },
      { path: 'signup', component: PageOneComponent },
      { path: 'signup/planform', component: PageTwoComponent },
      { path: 'signup/registration', component: PageThreeComponent },
      { path: 'signup/regform', component: PageFourComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}