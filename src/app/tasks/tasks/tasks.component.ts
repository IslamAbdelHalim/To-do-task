import { Component, Input } from '@angular/core';
import {TaskComponent} from "../task/task.component";
import { AddTaskComponent} from "../add-task/add-task.component";
import { dummyTasks } from '../../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    AddTaskComponent,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) id !: string;
  @Input({required: true}) name : string | undefined;
  addingTask : boolean = false;
  tasks = dummyTasks

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id)
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddTask(): void {
    this.addingTask = true;
  }

  addingNewTask(task: {}): void {
    const newTask = {...task, id: `t${this.tasks.length + 1}`, userId: this.id};
    // @ts-ignore
    this.tasks.push(newTask);
    this.addingTask = false;
  }

  cancelTask(): void {
    this.addingTask = false;
  }
}
