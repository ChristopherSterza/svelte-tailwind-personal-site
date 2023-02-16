<script>
  import BackgroundComponent from '../lib/components/BackgroundComponent.svelte';
  import LoadingScreen from '../lib/components/LoadingScreen.svelte';
  import HomeSection from '../lib/sections/HomeSection.svelte';

  let isLoading = true;
</script>

<svelte:head>
  <title>Hello, I'm Chris Sterza</title>
</svelte:head>

<!-- TODO: Create minimum loading time so screen doesn't flash the loading page -->
{#if isLoading}
  <LoadingScreen />
{/if}
<main class:hidden={isLoading}>
  <BackgroundComponent bind:isLoading />
  <HomeSection />
  <div class="h-screen" />
</main>
