var todosList = {
    todos: [],
    
    
    add: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed:false
        });
        this.display();
    },
    
    change: function(position, todoText) {
        this.todos[position].todoText =  todoText;
        this.display();
        
    }
    
}