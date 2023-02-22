<script>
  import { onMount } from 'svelte';
  import BackgroundComponent from '../lib/components/BackgroundComponent.svelte';
  import LoadingScreen from '../lib/components/LoadingScreen.svelte';
  import HomeSection from '../lib/sections/HomeSection.svelte';
  import ProjectSection from '../lib/sections/ProjectSection.svelte';
  import SkillSection from '../lib/sections/SkillSection.svelte';
  import Footer from '../lib/components/Footer.svelte';

  let isLoading = true;

  onMount(() => {
    let projectSection = document.getElementById('projectAnchor');
    let skillSection = document.getElementById('skillAnchor');

    let projectButton = document.getElementById('projectButton');
    let skillButton = document.getElementById('skillButton');

    projectButton.onclick = () => {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    };
    skillButton.onclick = () => {
      skillSection.scrollIntoView({ behavior: 'smooth' });
    };
  });
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
