export interface Task {
  id: string;
  title: string;
  description?: string;
  createdBy: string;
  status: 'Backlog' | 'In Progress' | 'Done';
  movedBy?: string;
  movedAt?: string;
}
