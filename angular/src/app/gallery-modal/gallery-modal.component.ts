import { Component, inject, signal } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery-modal',
  imports: [MatIconModule, CommonModule],
  templateUrl: './gallery-modal.component.html',
  styleUrl: './gallery-modal.component.css',
})
export class GalleryModalComponent {
  dialogRef = inject(DialogRef);
  data = inject(DIALOG_DATA);

  obj = this.data;

  hasLocation = signal(this.obj.location && this.obj.location.trim() !== '');
  hasCamera = signal(this.obj.camera && this.obj.camera.trim() !== '');

  close() {
    this.dialogRef.close();
  }
}
