import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from "./category-page/category-page.component";
import { DimensionComponent } from "./dimension/dimension.component";
import { FloatingBannerComponent } from "./floating-banner/floating-banner.component";
import { StudentDataComponent} from "./student-data/student-data.component";
import { TimerPageComponent} from "./timer/timer-page/timer-page.component";
import { TimerPageServiceComponent} from "./timer-with-service/timer-page-service/timer-page-service.component";

const routes: Routes = [
  {path: '', redirectTo: 'floating-banner' , pathMatch: 'full' },
  {path: 'floating-banner', component: FloatingBannerComponent },
  {path: 'category' , component: CategoryPageComponent },
  {path: 'timer' , component: TimerPageComponent },
  {path: 'timer-service' , component: TimerPageServiceComponent},
  {path:'student-data' , component: StudentDataComponent },
  {path: 'dimension' , component: DimensionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
