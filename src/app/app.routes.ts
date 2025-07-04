import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Presentation } from './components/presentation/presentation';
import { Devis } from './components/devis/devis';
import { Contact } from './components/contact/contact';
import { AdminPanel } from './components/admin-panel/admin-panel';
import { MentionsLegal } from './components/mentions-legal/mentions-legal';
import { Auth } from './components/auth/auth';
import { Projets } from './components/projets/projets';

export const routes: Routes = 
[
    {path: '', component: Home},
    {path: 'presentation', component: Presentation},
    {path: 'devis', component: Devis},
    {path: 'projets', component: Projets},
    {path: 'contact', component: Contact},
    {path: 'mentions-legales', component: MentionsLegal},
    {path: 'admin-miage-2003-directive', component: Auth},
    {path: 'admin', component: AdminPanel}
];
