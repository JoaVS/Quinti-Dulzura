// Modules

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages

import { MenuComponent } from './pages/menu/menu.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UploadComponent } from './pages/upload/upload.component';

const routes: Routes = [
  {path: "", redirectTo:"menu", pathMatch: "full"},
  {path: "menu", component: MenuComponent},
  {path: "contacts", component: ContactsComponent},
  {path: "profile", component: ProfileComponent},
  {path: "upload", component: UploadComponent},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
