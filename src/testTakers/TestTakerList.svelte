<script>
  import { createEventDispatcher } from "svelte";
  import { ButtonFooter, CardContent } from "../components";

  const dispatch = createEventDispatcher();
  export let testTakers = [];

  function selectTestTaker(user) {
    console.log(user);
    dispatch("selected", user);
  }
</script>

<ul class="list">
  {#each testTakers as { id, firstName, lastName }, i}
    <li role="presentation">
      <div class="card">
        <CardContent {firstName} {lastName} />
        <footer class="card-footer">
          <ButtonFooter user={testTakers[i]} on:clicked={selectTestTaker(testTakers[i])} />
        </footer>
      </div>
    </li>
  {/each}
</ul>
