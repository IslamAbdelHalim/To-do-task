import { Component, Output, EventEmitter } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter();
  @Output() newTask = new EventEmitter<{}>();
  title: string = '';
  summary: string = '';
  date: string = '';


  onCancelTask(): void {
    this.cancel.emit();
  }

  onAddTask(): void {
    const task = {
      title: this.title,
      summary: this.summary,
      dueDate: this.date,
    }

    this.newTask.emit(task);
  }
}
