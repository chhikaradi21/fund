import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SortModule } from '../sort.module';
import { FundComponent } from './fund.component';


export const appRoutes: Routes = [
    {path: '', component: FundComponent}
];

@NgModule({
    imports: [
        CommonModule,
        SortModule,
        RouterModule.forChild(appRoutes)
    ],
    declarations: [FundComponent]
})
export class FundModule { }

