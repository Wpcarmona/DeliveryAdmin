import { Routes } from '@angular/router';
import { EmployeesComponent, HomeComponent, InventoryComponent, LoginComponent, OrdersComponent, ProductsComponent, ReportsComponent } from './pages';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'reports', component: ReportsComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'employess', component: EmployeesComponent},
    {path: '**', redirectTo: 'login'},
];
