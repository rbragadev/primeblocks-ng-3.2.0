import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommandMenuComponent } from './commandmenu.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: CommandMenuComponent }]),
  ],
  exports: [RouterModule],
})
export class CommandMenuRoutingModule {}
