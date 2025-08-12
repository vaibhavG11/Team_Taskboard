import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-role-selector',
  standalone: true,
  templateUrl: './role-selector.component.html'
})
export class RoleSelectorComponent {
  private router = inject(Router);

  choose(role: string) {
    localStorage.setItem('taskboard_selected_role', role);
    this.router.navigate(['/login']);
  }
}
