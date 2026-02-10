import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { GalleryModalComponent } from '../gallery-modal/gallery-modal.component';
import { GalleryItem } from '../models/gallery-item';

@Component({
  selector: 'app-gallery-box',
  imports: [],
  templateUrl: './gallery-box.component.html',
  styleUrl: './gallery-box.component.css',
})
export class GalleryBoxComponent {

  @Input() obj: GalleryItem = {
    src: '',
    title: '',
    camera: '',
    location: '',
    description: '',
    printLink: '',
    fileLink: ''
  };

  constructor(private dialog: Dialog) { }

  onclick() {
    const ref = this.dialog.open(GalleryModalComponent, {
      width: '90vw',
      maxWidth: '800px',
      data: this.obj,
      panelClass: 'modal-panel',
      backdropClass: 'modal-backdrop',
    });

    ref.closed.subscribe(result => {
      console.log(result);
    });
  }
}
