import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos-component.html',
  styleUrls: ['./lista-produtos-component.css']   // cuidado: é style**Urls**
})
export class ListaProdutosComponent {
   novoProduto: string = '';  
}
