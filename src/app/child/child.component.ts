import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input() 
  firstName='Ishini';

  @Output()
  sendMessageEmitter =new EventEmitter()

  sendMessageToParent(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      // console.log(inputElement.value);
      this.sendMessageEmitter.emit(inputElement.value);
    }
  }
}
