<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import Router from "svelte-spa-router";
  import { link } from "svelte-spa-router";
  import routes from "./routes";
</script>

<main>
  <!-- Navigation links -->
  <ul>
    <li><a href="/" use:link>Home</a></li>
    <li><a href="/hello/svelte" use:link>Say hi!</a></li>
    <li>
      <a use:link={{ href: "/wild/card", disabled: true }}>Wildcard route</a>
    </li>
    <li><a href="/does/not/exist" use:link>Not found</a></li>
  </ul>

  <!-- Show the router -->
  <Router {routes} />
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a
      href="https://github.com/ItalyPaleAle/svelte-spa-router"
      target="_blank"
      rel="noreferrer">svelte-spa-router</a
    > which is the client side router used.
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
