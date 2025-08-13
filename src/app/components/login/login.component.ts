import { FormsModule } from '@angular/forms'; // FormsModule for ngModel
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule]
})
export class LoginComponent implements OnInit {
  role = '';
  name = '';
  id = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const r = localStorage.getItem('taskboard_selected_role');
    if (r) this.role = r;
    else this.router.navigate(['/']);

    const team = localStorage.getItem('taskboard_selected_team');
    if (!team) this.router.navigate(['/team']);
  }

  login() {
    if (!this.name.trim() || !this.id.trim()) { 
      alert('Enter name and id'); 
      return; 
    }
    const team = JSON.parse(localStorage.getItem('taskboard_selected_team') || '{}');
    const user = { id: this.id.trim(), name: this.name.trim(), role: this.role, teamId: team.teamId };
    localStorage.setItem('taskboard_user', JSON.stringify(user));
    window.dispatchEvent(new Event('storage'));
    this.router.navigate([ this.role === 'Team Member' ? '/member' : '/lead' ]);
    localStorage.removeItem('taskboard_selected_role');
  }
}
