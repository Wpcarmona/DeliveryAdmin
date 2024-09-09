import { Routes } from '@angular/router';
import {DepositComponent,
        EmployeesComponent, 
        HomeComponent, 
        InventoryComponent, 
        LoginComponent, 
        OffersComponent, 
        OrdersComponent, 
        ProductsComponent, 
        ReportsComponent, 
        WithdrawComponent } from './pages';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path: 'home/:data', component: HomeComponent },
    {path: 'login', component: LoginComponent},
    {path: 'reports', component: ReportsComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'employess', component: EmployeesComponent},
    {path: 'deposit', component: DepositComponent},
    {path: 'offers', component: OffersComponent},
    {path: 'withdraw', component: WithdrawComponent},
    {path: '**', redirectTo: 'login'},
];
