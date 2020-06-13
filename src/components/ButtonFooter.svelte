<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let user = undefined;

  function handleClick() {
    console.log(`button clicked ${JSON.stringify(user)}`);
    dispatch("clicked", user);
  }
</script>

<button class="link" tabindex="0" on:click={handleClick}>
  <i class="fa fa-eye" aria-hidden="true" />
  <span>View details</span>
</button>
