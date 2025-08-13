import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTask } from '../../state/task.actions';
import { selectAllTasks } from '../../state/task.selectors';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../../core/models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {
  title = '';
  description = '';
  createdBy = '';

  tasks: Task[] = [];
  user: any = null;
  duplicateError = '';

  constructor(private store: Store) {
    const rawUser = localStorage.getItem('taskboard_user');
    if (rawUser) {
      try { this.user = JSON.parse(rawUser); this.createdBy = this.user.name; } catch {}
    }
    const raw = localStorage.getItem('taskboard_tasks');
    if (raw) {
      try { this.tasks = JSON.parse(raw); } catch {}
    }
    this.store.select(selectAllTasks).subscribe(list => { this.tasks = list || []; });
    window.addEventListener('storage', () => {
      const r = localStorage.getItem('taskboard_user'); if (r) this.user = JSON.parse(r);
    });
  }

  addTask() {
    this.duplicateError = '';

    if (!this.title.trim()) { 
      this.duplicateError = 'Title is required'; 
      return; 
    }
    if (this.user?.role !== 'Team Member') { 
      alert('Only Team Members can add tasks'); 
      return; 
    }

    const exists = this.tasks.some(t => t.title.trim().toLowerCase() === this.title.trim().toLowerCase());

    if (exists) { 
      this.duplicateError = 'Task with this title already exists'; 
      return; 
    }
    
    const currentUser = JSON.parse(localStorage.getItem('taskboard_user') || '{}');
    const task: Task = {
    id: uuidv4(),
    title: this.title,
    description: this.description,
    createdBy: currentUser.name,
    status: 'Backlog',
    teamId: currentUser.teamId
  };
  this.store.dispatch(addTask({ task }));
    this.title = ''; this.description = '';
  }
}
