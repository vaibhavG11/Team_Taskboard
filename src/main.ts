import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { userReducer } from './app/state/user.reducer';
import { taskReducer } from './app/state/task.reducer';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore({ user: userReducer, tasks: taskReducer })
  ]
}).catch(err => console.error(err));
