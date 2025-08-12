import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // FormsModule for ngModel


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  role = '';
  name = '';
  id = '';

  private router = inject(Router);

  ngOnInit() {
    const r = localStorage.getItem('taskboard_selected_role');
    if (r) {
      this.role = r;
    } else {
      this.router.navigate(['/']);
    }
  }

  login() {
    if (!this.name.trim() || !this.id.trim()) {
      alert('Enter name and id');
      return;
    }

    const user = {
      id: this.id.trim(),
      name: this.name.trim(),
      role: this.role
    };

    localStorage.setItem('taskboard_user', JSON.stringify(user));

    // notify other components (they read from localStorage too)
    window.dispatchEvent(new Event('storage'));

    this.router.navigate([
      this.role === 'Team Member' ? '/member' : '/lead'
    ]);

    localStorage.removeItem('taskboard_selected_role');
  }
}
