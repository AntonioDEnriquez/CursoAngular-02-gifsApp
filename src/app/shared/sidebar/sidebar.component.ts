import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private giftService: GifsService) { }

  get historial() {
    return this.giftService.historial;
  }

  buscar(termino: string) {
    console.log(termino);
    this.giftService.buscarGifs(termino);

  }
}