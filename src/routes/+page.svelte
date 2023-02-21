<script>
  import BackgroundComponent from '../lib/components/BackgroundComponent.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import LoadingScreen from '../lib/components/LoadingScreen.svelte';
  import HomeSection from '../lib/sections/HomeSection.svelte';
  import ProjectSection from '../lib/sections/ProjectSection.svelte';
  import SkillSection from '../lib/sections/SkillSection.svelte';

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
  <ProjectSection />
  <SkillSection />
  <Footer />
</main>
