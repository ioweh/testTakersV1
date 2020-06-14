<script>
  import "./styles.scss";
  import { Router, Route } from "svelte-routing";
  import TestTakers from "./testTakers/TestTakers.svelte";

  import { PageNotFound, Redirect } from "./components";

  export let url = "";
</script>


<Router {url}>
  <main>
    <div>
      <Route path="/">
        <Redirect path="/testTakers" />
      </Route>
      <Route path="/testTakers" component={TestTakers} />
      <Route path="**" component={PageNotFound} />
    </div>
  </main>
</Router>
