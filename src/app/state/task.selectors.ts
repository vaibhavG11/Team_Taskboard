import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';
export const selectTaskState = createFeatureSelector<TaskState>('tasks');
export const selectAllTasks = createSelector(selectTaskState, s => s.tasks);
export const selectTasksByStatus = (status: string) => createSelector(selectAllTasks, tasks => tasks.filter(t => t.status === status));
