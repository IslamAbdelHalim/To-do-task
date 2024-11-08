import { Component, EventEmitter, Input, Output } from '@angular/core';
import{ User } from'./user.model'
import { DUMMY_USERS } from '../dummy-user-data';
import {CardComponent} from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  imports: [
    CardComponent
  ],
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected !: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return './users/' + this.user.avatar;
  }

  onUserSelect(): void {
    this.select.emit(this.user.id);
  }
}
