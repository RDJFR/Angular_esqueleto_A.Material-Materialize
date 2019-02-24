import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ContenidoXComponent } from './contenido-x/contenido-x.component';

const pagesroutes: Routes = [
    {
        path: 'inicio', component: PagesComponent,
        children: [
          {path: 'contenido', component: ContenidoXComponent},
        ]
      }
];

export const PagesRoutes = RouterModule.forChild(pagesroutes);
