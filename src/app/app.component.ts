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
      },
      {
        label: 'Kurumsal',
        icon: 'pi pi-objects-column',
      },
      {
        label: 'Projeler',
        icon: 'pi pi-hammer',
      },
      {
        label: 'Medya',
        icon: 'pi pi-camera',
      },
      {
        label: 'Hakkımızda',
        icon: 'pi pi-align-justify',
      },
      {
        label: 'İletişim',
        icon: 'pi pi-phone',
      }
    ];
  }

  someFn() {
    console.log('hi')
  }

}
