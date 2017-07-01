import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table/table.component';

export const HOME_ROUTES: Routes = [
	{
		path: '',
		component: TableComponent,
		children: [
			{ path: '', component: TableComponent },

			{ path: '**', redirectTo: '' }
		]
	},
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
