import { createAction, props } from '@ngrx/store';
import { Task } from '../core/models/task.model';

export const addTask = createAction('[Task] Add', props<{ task: Task }>() );
export const moveTask = createAction('[Task] Move', props<{ taskId: string, status: 'In Progress' | 'Done', movedBy: string }>() );
export const setTasks = createAction('[Task] Set', props<{ tasks: Task[] }>() );
