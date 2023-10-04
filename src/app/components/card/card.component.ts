import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title!: string;
  @Input() sub!: string;
  @Input() desc!: string;
  
  @Input() link1!: string;
  @Input() link2!: string;

  @Input() href1!: string;
  @Input() href2!: string;

  @Input() routerlink1!: string;
  @Input() routertext1!: string;

  @Input() scroll!: string;
}
