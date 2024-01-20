import { Component, Input} from '@angular/core';
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
}
