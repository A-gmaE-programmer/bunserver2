import { Html } from "@elysiajs/html";

export const BaseHtml = Html.compile((p) => 
  <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title> Crazy web stacks </title>
      <script src="https://unpkg.com/htmx.org@1.9.10"/>
      <script crossorigin="true" src="https://cdn.twind.style"/>
    </head>
    {p.children}
  </html>
);

const TopNav = Html.compile(() =>
  <header class="z-20 w-full fixed top-0 border-b-2 border-double border-white bg-black flex justify-center">
    <nav class="container flex flex-row justify-center self-strech">
      <a href="/#" class="text-sky-300 hover:text-sky-500 center p-2 px-4 underline">
        Home
      </a>
      <button
        type="button"
        onclick="window.location.href='#todoList';"
        class="text-sky-300 hover:text-sky-500 center p-2 px-4 underline"
        hx-get="/todos"
        hx-swap="innerHTML"
        hx-target="#todoList"
      >Todo List
      </button>
    </nav>
  </header>
);

export const Index = Html.compile(() =>
  <body class="bg-black text-2xl">
    <TopNav/>
    <main class="w-full center flex flex-col justify-center text-sky-300">
      <div class="h-32"/>
      <h1 class="flex justify-center w-auto text-8xl pt-64 font-semibold">Welcome.</h1>
      <div
        id="todoList"
        class="flex w-auto justify-center pt-64"
      />
      <div class="h-screen"/>
    </main>
  </body>
);
