import { Component } from '@angular/core';
import { GalleryBoxComponent } from '../gallery-box/gallery-box.component';

@Component({
  selector: 'app-gallery',
  imports: [GalleryBoxComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {

  photos = [
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
      camera: 'Test Camera',
      location: 'Test Location',
      description: 'This is a test photo.',
      printLink: 'https://example.com/print/test.jpg',
      fileLink: 'https://example.com/file/test.jpg'
    },
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
      camera: 'Test Camera',
      location: 'Test Location',
      description: 'This is a test photo.',
      printLink: 'https://example.com/print/test.jpg',
      fileLink: 'https://example.com/file/test.jpg'
    },
    // Add more photo objects here
  ];
}
