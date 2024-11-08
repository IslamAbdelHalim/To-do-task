import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-user-data';
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from './tasks/tasks/tasks.component';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  userId: string | undefined;

  get selectedUser() {
    return this.users.find((user) => user.id === this.userId)!;
  }

  onSelectUser(id: string) {
    this.userId = id;
  }
}
