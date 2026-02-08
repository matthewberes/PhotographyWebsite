import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-box',
  imports: [],
  templateUrl: './gallery-box.component.html',
  styleUrl: './gallery-box.component.css',
})
export class GalleryBoxComponent {

  @Input() src: string = '';
  @Input() title: string = '';
  @Input() camera: string = '';
  @Input() location: string = '';
  @Input() description: string = '';
  @Input() printLink: string = '';
  @Input() fileLink: string = '';

}
