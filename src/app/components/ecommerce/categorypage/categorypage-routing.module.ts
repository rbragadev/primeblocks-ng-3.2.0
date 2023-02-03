import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryPageComponent } from './categorypage.component';

@NgModule({
  imports: [RouterModule.forChild(
    [
      {path: '', component: CategoryPageComponent}
    ]
  )],
  exports: [RouterModule]
})
export class CategoryPageRoutingModule { }
