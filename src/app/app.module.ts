import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { AppComponent } from './app.component';
import { SocialMediaIconsComponent } from './social-media-icons/social-media-icons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { KurumsalComponent } from './kurumsal/kurumsal.component';
import { ProjelerComponent } from './projeler/view/projeler.component';
import { MedyaComponent } from './medya/medya.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SocialMediaIconsComponent,
    ImageSliderComponent,
    KurumsalComponent,
    ProjelerComponent,
    MedyaComponent,
    HakkimizdaComponent,
    IletisimComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

//slider image aşağı doğru bir tık daha büyütülebilir
