import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task.model";

@Component({
    selector: 'app-tasks-add',
    templateUrl: './tasks-add.component.html',
    styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

    addTaskValue: string = null;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
    }

    onTaskAdd() {
        const task = new Task(this.addTaskValue, false, TasksAddComponent.getTodayAsString());
        this.taskService.addTask(task).subscribe(newtask => {
            this.addTaskValue = '';
            this.taskService.onTaskAdded.emit(newtask);
        });
    }

    private static getTodayAsString(): string {
        return new Date().toLocaleDateString('pt-BR', {year: 'numeric', month: '2-digit', day: '2-digit'});
    }
}
