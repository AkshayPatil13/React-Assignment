import {observable, action, computed} from 'mobx';
import { toJS } from 'mobx';

class TodoStore{
    @observable todos = [];
    @observable todoId = '';
    generateId(){
        return '_' + Math.random().toString(36).substr(2, 9)
    }

    @action 
    addTodo = (task) => {
        this.todos.push({
            id:this.generateId(),
            task:task,
            completed: false
        });
    }

    @action
    updateTodo = (task,todoId) => {
        for(let todo in this.todos){
            if(todo.id === todoId){
                todo.task = task;
            }
        }
    }

    @action 
    removeTodo = (todoId) => {
       for(let i=0;i<this.todos.length;i++){
           if(this.todos[i].id === todoId){
               this.todos.splice(i,1)
           }
       }
        console.log('Array : ',toJS(this.todos));
    }

    @action
    markAsCompleted = (todoId) => {
        for(let todo of this.todos){
            if(todo.id === todoId){
                todo.completed = !todo.completed;
            }
        }
    }

    @computed 
    get todosCount(){
        return this.todos.length;
    }

    @computed
    get remainingTodoCount(){
        return this.todos.filter(todo => !todo.completed).length;
    }

    @action
    setTodoId = (task) => {
        for(let todo of this.todos){
            if(todo.task === task){
                this.todoId = todo.id;
            }
        }
    }
    
}

const store = new TodoStore();
export default store;