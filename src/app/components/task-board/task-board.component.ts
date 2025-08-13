import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { moveTask } from '../../state/task.actions';
import { Task } from '../../core/models/task.model';
import { selectAllTasks } from '../../state/task.selectors';
// import { updateTaskStatus } from '../../state/task.actions';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-board.component.html'
})
export class TaskBoardComponent {
  tasks: Task[] = [];
  currentUser: any;
  user: any = null;
  columns = ['Backlog', 'In Progress', 'Done'];

  constructor(private store: Store) {

    const rawUser = localStorage.getItem('taskboard_user');


    if (rawUser) { 
      try { 
        this.user = JSON.parse(rawUser); 
      } 
      catch {} 
    }

    const rawTasks = localStorage.getItem('taskboard_tasks');

    if (rawTasks) { 
      try { 
        this.tasks = JSON.parse(rawTasks); 
      }
      catch {} 
    }

    this.store.select(selectAllTasks).subscribe(list => {
      this.tasks = list || [];
      localStorage.setItem('taskboard_tasks', JSON.stringify(this.tasks));
    });
    window.addEventListener('storage', () => {
      const r = localStorage.getItem('taskboard_user'); if (r) this.user = JSON.parse(r);
    });
  }

  ngOnInit() {
  this.currentUser = JSON.parse(localStorage.getItem('taskboard_user') || '{}');

  this.store.select(selectAllTasks).subscribe(tasks => {
    // Only show tasks for the same team
    this.tasks = tasks.filter(task => task.teamId === this.currentUser.teamId);
  });
}

  getTasks(status: string) {
    return this.tasks.filter(t => t.status === status);
  }

  canMove() {
    return this.user?.role === 'Team Lead';
  }

  move(task: Task) {

    if (!this.canMove()) { 
      alert('Only Team Leads can move tasks'); 
      return; 
    }
    if (task.status === 'Backlog') {
      this.store.dispatch(moveTask({ taskId: task.id, status: 'In Progress', movedBy: this.user?.name || 'Unknown' }));
    } 
    else if (task.status === 'In Progress') {
      this.store.dispatch(moveTask({ taskId: task.id, status: 'Done', movedBy: this.user?.name || 'Unknown' }));
    }
  }
}
