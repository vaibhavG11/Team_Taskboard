import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TaskBoardComponent } from '../task-board/task-board.component';

@Component({
  selector: 'app-lead-dashboard',
  standalone: true,
  imports: [HeaderComponent, TaskBoardComponent],
  templateUrl: './lead-dashboard.component.html'
})
export class LeadDashboardComponent {}
