import { createReducer, on } from '@ngrx/store';
import { addTask, moveTask } from './task.actions';
import { Task } from '../core/models/task.model';

// Define the shape of state
export interface TaskState {
  tasks: Task[];
}

// Load from localStorage on app start
function loadTasksFromLocalStorage(): Task[] {
  const stored = localStorage.getItem('taskboard_tasks');
  return stored ? JSON.parse(stored) : [];
}

// Save to localStorage whenever tasks change
function saveTasksToLocalStorage(tasks: Task[]) {
  localStorage.setItem('taskboard_tasks', JSON.stringify(tasks));
}

// Initial state
export const initialState: TaskState = {
  tasks: loadTasksFromLocalStorage()
};

export const taskReducer = createReducer(
  initialState,

  // When adding a task
  on(addTask, (state, { task }) => {
    const updated = [...state.tasks, task];
    saveTasksToLocalStorage(updated);
    return { ...state, tasks: updated };
  }),

  // When moving a task
  on(moveTask, (state, { taskId, status, movedBy }) => {
    const updated = state.tasks.map(t =>
      t.id === taskId
        ? { ...t, status, movedBy, movedAt: new Date().toISOString() }
        : t
    );
    saveTasksToLocalStorage(updated);
    return { ...state, tasks: updated };
  })
);