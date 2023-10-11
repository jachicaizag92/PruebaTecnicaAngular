import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent {

  //items menú
  itemsSidebar = [
    { label: 'Listado', icon: 'list', url: './list ' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]


}
