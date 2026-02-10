import { Component } from '@angular/core';
import { GalleryBoxComponent } from '../gallery-box/gallery-box.component';
import { GalleryItem } from '../models/gallery-item';

@Component({
  selector: 'app-gallery',
  imports: [GalleryBoxComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {

  photos: GalleryItem[] = [
    {
      src: 'test.jpg',
      title: 'Test Photo',
      camera: 'Test Camera',
      location: 'Test Location',
      description: 'This is a test photo.',
      printLink: 'https://example.com/print/test.jpg',
      fileLink: 'https://example.com/file/test.jpg'
    },
    {
      src: 'test.jpg',
      title: 'Test Photo',
      camera: '',
      location: 'Test Location',
      description: 'This is a test photo.',
      printLink: 'https://example.com/print/test.jpg',
      fileLink: 'https://example.com/file/test.jpg'
    },
    {
      src: 'test.jpg',
      title: 'Test Photo',
      camera: 'Test Camera',
      location: '',
      description: 'This is a test photo.',
      printLink: 'https://example.com/print/test.jpg',
      fileLink: 'https://example.com/file/test.jpg'
    },
    {
      src: 'test.jpg',
      title: 'Test Photo',
      camera: '',
      location: '',
      description: 'This is a test photo.',
      printLink: 'https://example.com/print/test.jpg',
      fileLink: 'https://example.com/file/test.jpg'
    },
    // Add more photo objects here
  ];
}
