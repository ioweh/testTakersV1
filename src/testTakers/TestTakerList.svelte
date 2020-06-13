<script>
  import { createEventDispatcher } from "svelte";
  import { CardContent } from "../components";

  const dispatch = createEventDispatcher();
  export let testTakers = [];
</script>

<ul class="list">
  {#each testTakers as { id, firstName, lastName }, i}
    <li role="presentation">
      <div class="card">
        <CardContent {firstName} {lastName} />
      </div>
    </li>
  {/each}
</ul>
