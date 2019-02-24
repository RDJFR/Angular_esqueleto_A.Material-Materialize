import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
    declarations: [
        BreadcrumbComponent
    ],
    exports: [
        BreadcrumbComponent
    ],
    imports: [
        BrowserModule
    ]
})

export class sharedModule {}
