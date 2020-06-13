<script>
  import { onMount } from "svelte";
  import { state, getTestTakersAction } from "../store";
  import TestTakerList from "./TestTakerList.svelte";
  import TestTakerDetail from "./TestTakerDetail.svelte";

  const { testTakers } = state;

  let selected = undefined;

  onMount(async () => await getTestTakers());

  async function getTestTakers() {
    await getTestTakersAction();
  }

  function clear() {
      selected = null;
  }

  function select({ detail: user }) {
    selected = user;
    console.log(`selected ${user.userId}`);
  }
</script>

<div class="content-container">
  <div class="columns is-multiline is-variable">
    {#if $testTakers}
      <div class="column is-8">
        {#if !selected}
          <TestTakerList testTakers={$testTakers} on:selected={select} />
        {:else}
          <TestTakerDetail passedTestTaker={selected} on:unselect={clear} />
        {/if}
      </div>
    {/if}
  </div>
</div>
