console.log("Starting server 2.0");
// Package imports
import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
// Local imports
import { BaseHtml, Index } from "./components.tsx";
import { todos, createItem, toggleItem, delItem, TodoList, TodoItem } from "./todoList.tsx";

const server = new Elysia()
  .use(html())
  .get("/", () => <BaseHtml><Index/></BaseHtml>)
  .get("/todos", () => <TodoList todos={todos} />)
  .post("/todos", createItem, { body: t.Object({ content: t.String() }) })
  .post("/todos/toggle/:id", toggleItem, { params: t.Object({ id: t.Numeric() }) })
  .delete("/todos/:id", delItem, { params: t.Object({ id: t.Numeric() }) })
  .listen(3000);

console.log("Elysia server started");
doCommandLine();




async function doCommandLine() {
  const commands = new Map([
    ["quit", (_args: string[]) => { server.stop(); process.exit(); }]
  ]);
  // process.stdout.write("> ");
  for await (const line of console) {
    if (line)
    {
      const args = line.split(' ');
      const toRun = commands.get(args[0]) ?? ((_args: string[]) => console.log("Unknown command"));
      toRun(args);
    }
    // process.stdout.write("> ");
  }
}
