import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListProductComponent } from './listproduct.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ListProductComponent }
	])],
	exports: [RouterModule]
})
export class ListProductRoutingModule { }
