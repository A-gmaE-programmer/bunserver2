import { Html } from "@elysiajs/html";

export interface todo {
  id: number,
  content: string,
  completed: boolean,
};

export const createItem = ({ body }: { body: { content: string } }) => {
  if (body.content.length === 0) {
    throw new Error("Content cannot be empty");
  }
  const newTodo = {
    id: lastId++,
    content: body.content,
    completed: false
  }
  todos.push(newTodo);
  return <TodoItem {...newTodo} />
};

export const toggleItem = ({ params }: { params: { id: number } }) => {
  const todo = todos.find((todo) => todo.id === params.id);
  if (todo) {
    todo.completed = !todo.completed;
    return <TodoItem {...todo} />;
  }
};

export const delItem = ({ params }: { params: { id: number } }) => {
  const todo = todos.find((todo) => todo.id === params.id);
  if (todo) {
    todos.splice(todos.indexOf(todo), 1);
  }
};

let lastId = 3;
export const todos: todo[] = [
  { id: 1, content: "Learn c++", completed: false },
  { id: 2, content: "Study for NOI", completed: false},
]

export const TodoItem = ({ id, content, completed }: todo) =>
  <div class="flex flex-row space-x-3 w-auto justify-end items-center">
    <p safe>{content}</p>
    <input
      type="checkbox"
      class="w-8 h-8"
      checked={completed}
      hx-post={`/todos/toggle/${id}`}
      hx-target="closest div"
      hx-swap="outerHTML"
    />
    <button
      type="button"
      class="text-red-500"
      hx-delete={`/todos/${id}`}
      hx-target="closest div"
      hx-swap="outerHTML"
    >X</button>
  </div>
;

export const TodoForm = Html.compile(() => 
  <form
    class="flex flex-row w-auto space-x-3 justify-end items-center pt-4"
    hx-post="/todos"
    hx-swap="beforebegin"
  >
    <input type="text" name="content" class="bg-black border border-white rounded-md" />
    <button type="submit" class="hover:text-sky-500">Add</button>
  </form>

);

export const TodoList = (p: Html.PropsWithChildren<{todos: todo[]}>) =>
  <div class="flex flex-col w-auto h-auto text-3xl">
    <h1 class="flex justify-center w-auto text-4xl pb-4 underline">Todo List</h1>
    {p.todos.map((todoItem: todo) => <TodoItem {...todoItem}/>)}
    <TodoForm />
  </div>
;
