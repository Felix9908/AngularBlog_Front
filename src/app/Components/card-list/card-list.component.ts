import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardComponent } from '../../Components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
   @Input() posts: any; 
   @Output() estadoCambiadoAlAbuelo: EventEmitter<boolean> = new EventEmitter<boolean>();
   @Output() idTarjetaCambiadoAlAbuelo: EventEmitter<number> = new EventEmitter<number>();

   onEstadoCambiado(nuevoEstado: boolean) {
    this.estadoCambiadoAlAbuelo.emit(true);
  }

  onIdTarjetaCambiado(postId: number) {
    this.idTarjetaCambiadoAlAbuelo.emit(postId);
  }
}
