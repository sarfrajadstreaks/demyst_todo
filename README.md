# demyst_todo

# Setup (Local) in your terminal
1. git clone this repo
2. npm install
3. npm install -g
4. todo 

Note: todo can take two argument url and limit
url: to specified any url else it will take default url i.e https://jsonplaceholder.typicode.com/todos
limit: to specify number of first even todos.Default is 20;
so, user can even run todo with parameters below
todo --url=https://someUrlThatGiveTodos --limit=10
or
todo --limit=14

# Setup (Docker) in your terminal

1. git clone this repo
2. docker build -t TodoAppImage .
3. docker run --name TodoApp -d TodoAppImage

you can exec into container to run todo as many times you like.

