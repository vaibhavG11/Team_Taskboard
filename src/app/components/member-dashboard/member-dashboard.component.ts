import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskBoardComponent } from '../task-board/task-board.component';

@Component({
  selector: 'app-member-dashboard',
  standalone: true,
  imports: [HeaderComponent, TaskFormComponent, TaskBoardComponent],
  templateUrl: './member-dashboard.component.html'
})
export class MemberDashboardComponent {}
