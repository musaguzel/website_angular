import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  faCoffee = faCoffee;
  items: MenuItem[] | undefined;
  isMediaGalleryOpen: boolean = false;
  selectedSection: string = 'anasayfa';
  offset: number = 70; 

  onImageSelect(isOpen: boolean): void {
    this.isMediaGalleryOpen = isOpen;
  }




  slides: any[] = [

    {
      url: './assets/images/insat.jpg',
      title: 'deneme bir iki uc',
      description: 'Selam',
    },

    {
      url: './assets/images/insaat.jpg',
      title: 'deneme bir iki uc',
      description: 'Selam',
    }
  ];

  ngOnInit(): void {
    this.items = [
      {
        label: '<b>Anasayfa</b>',
        escape: false,
        /*items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project', url: 'https://www.google.com' },
            { label: 'Other', command: () => this.someFn() },
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]*/
        routerLink: ['/'],
        command: () => this.selectSection('anasayfa')
      },
      {
        label: 'Kurumsal',
        icon: 'pi pi-objects-column',
        routerLink: ['/'],
        command: () => this.selectSection('kurumsal')
      },
      {
        label: 'Projeler',
        icon: 'pi pi-hammer',
        routerLink: ['/'],
        command: () => this.selectSection('projeler')
      },
      {
        label: 'Medya',
        icon: 'pi pi-camera',
        routerLink: ['/'],
        command: () => this.selectSection('medya')
      },
      {
        label: 'Hakkımızda',
        icon: 'pi pi-align-justify',
        routerLink: ['/'],
        command: () => this.selectSection('hakkimizda')
      },
      {
        label: 'İletişim',
        icon: 'pi pi-phone',
        routerLink: ['/'],
        command: () => this.selectSection('iletisim')
      }
    ];
  }

  selectSection(section: string): void {
    this.selectedSection = section;
    const element = document.getElementById(section);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - this.offset;
      window.scrollTo({ top: top, behavior: 'smooth' });

    }
  }

  someFn() {
    console.log('hi')
  }

}
