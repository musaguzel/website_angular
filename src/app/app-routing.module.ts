import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { KurumsalComponent } from './kurumsal/kurumsal.component';
import { ProjelerComponent } from './projeler/view/projeler.component';
import { MedyaComponent } from './medya/medya.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { IletisimComponent } from './iletisim/iletisim.component';

const routes: Routes = [
    { path: 'anasayfa', component: AppComponent },
    { path: 'kurumsal', component: KurumsalComponent },
    { path: 'projeler', component: ProjelerComponent },
    { path: 'medya', component: MedyaComponent },
    { path: 'hakkimizda', component: HakkimizdaComponent },
    { path: 'iletisim', component: IletisimComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
