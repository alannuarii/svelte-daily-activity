<script>
  import { page } from "$app/stores";

  // let accessPath
  let newPath;

  $: path = $page.url.pathname;
  $: {
    let accessPath = path.split("/");
    accessPath.pop();
    newPath = accessPath.join("/");
    if (newPath === "") {
      newPath = "/";
    }
  }
</script>

<nav class="navbar bg-dark shadow">
  <div class="container-fluid">
    {#if path === "/"}
      <a href="/" class="navbar-brand">INI HEADER</a>

      <div>
        <a href="/rekap" class="btn btn-outline-info me-1"><i class="bi-list"></i></a>
      </div>
    {:else}
      <a href={newPath} class="btn btn-outline-info me-1">Back</a>
      <h6 href="/" class="navbar-brand me-3">INI HEADER</h6>
    {/if}
  </div>
</nav>

<style>
  .navbar {
    height: 80px;
  }
  .navbar-brand {
    color: #ffffff;
    font-weight: 700;
    font-size: 23px;
  }
  h6 {
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    margin: 0;
  }
</style>
