import { Html } from "@elysiajs/html";

export const Animated = Html.compile(() =>
<>
  <body class="bg-gray-400 text-2xl">
    <div class="bg-white flex justify-center text-black">
      <h1 class="text-6xl font-semibold"> Hello animations </h1>
    </div>
    <div class="h-4 bg-black" />
  </body>
  <script src="/anime.min.js" />
  <script src="/public/customAnimations.js" />
</>
)
