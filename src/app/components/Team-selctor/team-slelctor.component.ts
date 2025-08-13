
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-selector',
  standalone: true,
  template: `
    <div class="flex flex-col items-center mt-10">
      <h1 class="text-2xl font-bold mb-6">Select Your Team</h1>
      <button (click)="selectTeam('Developer Team', '123')" class="bg-blue-500 text-white px-6 py-2 mb-4 rounded">Developer Team</button>
      <button (click)="selectTeam('Tester Team', '456')" class="bg-green-500 text-white px-6 py-2 rounded">Tester Team</button>
    </div>
  `
})
export class TeamSelectorComponent {
  constructor(private router: Router) {}

  selectTeam(name: string, id: string) {
    localStorage.setItem('taskboard_selected_team', JSON.stringify({ teamName: name, teamId: id }));
    this.router.navigate(['/']); // Go to role selector
  }
}
