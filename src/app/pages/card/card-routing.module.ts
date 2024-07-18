import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardPage } from './card.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: CardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardPageRoutingModule {}
