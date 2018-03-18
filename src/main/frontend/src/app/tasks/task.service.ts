import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Task} from "./task.model";

@Injectable()
export class TaskService {

    onTaskAdded = new EventEmitter<Task>();

    constructor(private http: HttpClient) {
    }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>('/api/tasks');
    }

    saveTask(task: Task, checked: boolean): Observable<Task> {
        task.completed = checked;
        return this.addTask(task);
    }

    addTask(task: Task): Observable<Task> {
        return this.http.post<Task>('/api/tasks/save', task);
    }
}
