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
    // Set the button behavior
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

    // Intersection Observer to handle animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting)
            setTimeout(() => {
              entry.target.classList.add('animated');
              observer.unobserve(entry.target);
            }, idx * 350);
        });
      },
      { threshold: 0.25 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });
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

<style>
  :global([data-animate]) {
    opacity: 0;
    position: relative;
    left: -15%;
    transition-duration: 350ms;
    transition-delay: 35ms;
  }
  :global(.animated) {
    opacity: 1;
    left: 0;
  }
  :global([data-animate='fade']) {
    opacity: 0;
    position: relative;
    transition-duration: 500ms;
    transition-delay: 100ms;
  }
  :global(.animated[data-animate='fade']) {
    opacity: 1;
  }
</style>
