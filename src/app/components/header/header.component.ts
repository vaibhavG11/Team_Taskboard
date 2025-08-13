import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setUser, logoutUser } from '../../state/user.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  user: any = null;

  constructor(private router: Router, private store: Store) {
    this.hydrateFromLocal();
    window.addEventListener('storage', () => this.hydrateFromLocal());
  }

  hydrateFromLocal() {
    const raw = localStorage.getItem('taskboard_user');
    if (raw) {
      try {
        const u = JSON.parse(raw);
        this.user = u;
        this.store.dispatch(setUser({ id: u.id, name: u.name, role: u.role }));
      } catch {}
    }
  }

  logout() {
    localStorage.removeItem('taskboard_user');
    this.store.dispatch(logoutUser());
    this.router.navigate(['/team']);
  }
}
