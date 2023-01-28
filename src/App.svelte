<script lang="ts">
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

  <div class="card">
    <Counter />
  </div>
</main>
