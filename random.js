var todosList = {
    todos: [],
    
    display: function() {
        console.log (this.todos)
    },
    
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
