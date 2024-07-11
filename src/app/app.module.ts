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


@NgModule({
  declarations: [
    AppComponent,
    SocialMediaIconsComponent,
    ImageSliderComponent,
    KurumsalComponent,
    ProjelerComponent,
    MedyaComponent,
    HakkimizdaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
