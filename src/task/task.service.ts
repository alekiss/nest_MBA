import { Injectable } from '@nestjs/common';
import { time } from 'console';

export type Task = {
    id: number;
    title: string;
    description: string;
    done: boolean;
}

interface ITaskService {
    listTasks(): Task[];
    createTask(task: Task): Task;
    updateTask(task: Task): Task;
    deleteTask(task: Task): Task;
}

@Injectable()
export class TaskService implements ITaskService{
    tasks: Task[] = [];

    constructor(){
        for(let i = 0; i < 10; i++) {
            this.tasks.push({
                id: i,
                title: `Task ${i}`,
                description: `Description ${i}`,
                done: false
            })
        }
    }


    listTasks(): Task[] {
        return this.tasks;
    }

    createTask(task: Task): Task {
    const maxId = this.tasks.reduce((max, task) => Math.max(task.id, max), 0);
    task.id = maxId + 1;

    this.tasks.push(task);

    return task;
    }
}
