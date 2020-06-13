<script>
  import { onMount } from "svelte";
  import { state, getTestTakersAction } from "../store";
  import TestTakerList from './TestTakerList.svelte';
  import TestTakerDetail from './TestTakerDetail.svelte';

  const { testTakers } = state;

  let selected = undefined;

  onMount(async () => await getTestTakers());

  async function getTestTakers() {
    await getTestTakersAction();
  }
</script>

<div class="content-container">
  <div class="columns is-multiline is-variable">
    {#if $testTakers}
      <div class="column is-8">
        {#if !selected}
          <TestTakerList testTakers={$testTakers} />
        {:else}
          <TestTakerDetail />
        {/if}
      </div>
    {/if}
  </div>
</div>
