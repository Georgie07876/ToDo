export type TaskStatus= 'pending' | 'active' | 'complete'
export interface Task {
    id: number;
    title: string;
    status: TaskStatus;
}