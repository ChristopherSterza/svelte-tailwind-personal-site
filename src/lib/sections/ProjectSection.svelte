<script>
  import Section from '../components/Section.svelte';
  import ProjectCard from '../components/ProjectCard.svelte';
  import projectData from '../data/projects.json';
  let projects = projectData.projects;
</script>

<div id="projectAnchor" />
<Section>
  <div id="headerWrapper" data-animate>
    <h1 class="mb-2 text-6xl font-medium">Projects</h1>
    <h2 class="mb-16 text-xl">
      Here are some of my projects. Hover them for more information.
    </h2>
  </div>

  <!-- Project cards -->
  <div id="projectList" class="flex flex-row flex-wrap w-full gap-x-8 gap-y-7">
    {#each projects as project}
      <ProjectCard
        name={project.name || ''}
        description={project.description || ''}
        thumbnail={project.thumbnailImage || ''}
        thumbnailScale={project.thumbnailScale || '1'}
        languages={project.languages || ''}
        liveURL={project.liveURL || ''}
        sourceURL={project.sourceURL || ''}
      />
    {/each}
  </div>
</Section>
