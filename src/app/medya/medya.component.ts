import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-medya',
  templateUrl: './medya.component.html',
  styleUrls: ['./medya.component.css']
})
export class MedyaComponent {

  images: string[] = [];

  constructor() {
    for (let i = 1; i <= 20; i++) {
      this.images.push(`assets/media-gallery-images/image${i}.jpg`)
    }
  }



  @Output() imageSelected = new EventEmitter<boolean>();
  selectedImage: string | null = null;

  openImage(image: string): void {
    this.selectedImage = image;
    this.imageSelected.emit(true);
  }

  closeImage(): void {
    this.selectedImage = null;
    this.imageSelected.emit(false);
  }
}
