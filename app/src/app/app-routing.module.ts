import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { StoreDataComponent } from './store-data/store-data.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from './auth.guard';





const routes: Routes = [
  {path: '', component:StoreDataComponent },
  {path: 'login', component:LoginComponent},
  {path: 'edit', component:EditComponent,canActivate:[AuthGuard]},
  {path: 'store', component:StoreComponent,canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
