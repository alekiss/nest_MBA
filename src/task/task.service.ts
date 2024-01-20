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
        this.tasks.push({
            id: new Date().getTime,
            ...task,
        })
        return task;
    }

    updateTask(task: Task): Task {
        const localTask = this.findOne(task.id)
    }

    deleteTask(task: Task): Task {
        
    }
}
