import { NgModule } from '@angular/core';

// Rutas
import { PagesRoutes } from './pages.routes';

// Modulos
import { sharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { ContenidoXComponent } from './contenido-x/contenido-x.component';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material-module';

@NgModule({
declarations: [
    PagesComponent,
    ContenidoXComponent
],
exports: [
    ContenidoXComponent
],
imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PagesRoutes,
    sharedModule
]
})

export class PagesModule {}
