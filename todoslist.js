var todosList = {
        todos: [],

        display: function() {
            //if the todos array is equal to 0 meaning nothing inside then display the statement
            if (this.todos.length === 0) {
                console.log("Your todo list is empty");
            }
            else {
                // But if something is added iterate through the array display the statement and the parentheses next to it
                console.log("My todos");
                for (var i = 0; i < this.todos.length; i++) {
                    if (this.todos[i].completed === true) {
                        console.log("(x)", this.todos[i].todoText)
                    }
                    else {
                        console.log("( )", this.todos[i].todoText)
                    }

                }

            }
        },
        //add a todo to the array and start it off as false
        add: function(todoText) {
            this.todos.push({
                todoText: todoText,
                completed: false
            });
            this.display();
        },

        //change an item in the array by accessing the positon and adding the text you want to it
        change: function(position, todoText) {
            this.todos[position].todoText = todoText;
            this.display();

        },

        //delete an item in the array
        delete: function(position) {
            this.todos.splice(position, 1);
            this.display();
        },
        //the toggle function takes the 
        toggleCompleted: function(position) {
            var todo = this.todos[position];
            todo.completed = !todo.completed;
            this.display();
        },
        toggleAll: function() {
            var totalTodos = this.todos.length;
            var completedTodos = 0;

            for (var i = 0; i < totalTodos; i++) {
                if (this.todos[i].completed === true {
                        completedTodos++;
                    
                }
            }

                if (completedTodos === totalTodos) {
                    for (var i = 0; i < totalTodos; i++) {
                        this.todos[i].completed = false;
                    }
                }

            };

        }
