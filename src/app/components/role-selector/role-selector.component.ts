import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-selector',
  standalone: true,
  templateUrl: './role-selector.component.html'
})
export class RoleSelectorComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    const team = localStorage.getItem('taskboard_selected_team');
    if (!team) {
      this.router.navigate(['/team']);
    }
  }

  selectRole(role: string) {
    localStorage.setItem('taskboard_selected_role', role);
    this.router.navigate(['/login']);
  }

  choose(role: string) {
    localStorage.setItem('taskboard_selected_role', role);
    this.router.navigate(['/login']);
  }
}
