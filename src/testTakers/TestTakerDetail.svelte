<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { state, getTestTakerAction } from "../store";

  const dispatch = createEventDispatcher();

  const { testTaker } = state;
  export let passedTestTaker = {};

  onMount(async () => await getTestTaker());

  async function getTestTaker() {
    await getTestTakerAction(passedTestTaker.userId);
  }

  function handleClick() {
    dispatch("unselect");
  }
</script>

<article>
  <header>
    <h1>{$testTaker.title} {$testTaker.firstName} {$testTaker.lastName}</h1>
  </header>

  <figure>
    <img src={$testTaker.picture} alt={$testTaker.firstName} />
    <figcaption>
      {$testTaker.title} {$testTaker.firstName} {$testTaker.lastName}
    </figcaption>
  </figure>

  <p>Contact information:</p>

  <address>
    <a href="mailto:{$testTaker.email}">{$testTaker.email}</a>
    <br />
    {$testTaker.address}
  </address>

  <footer>
    <button class="exit" on:click={handleClick}>Exit</button>
  </footer>
</article>
