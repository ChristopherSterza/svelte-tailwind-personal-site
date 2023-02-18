<script>
  import ProjectCard from '../components/ProjectCard.svelte';
  import projectData from '../data/projects.json';
  let projects = projectData.projects;
</script>

<section class="container mx-auto flex flex-col text-white">
  <div class="flex flex-col mx-4 sm:border-l-4 sm:border-lime-400">
    <!-- Dot -->
    <span
      class="hidden relative w-[20px] h-[20px] bg-lime-400 rounded-full -left-3 -bottom-[50px] shrink-0 sm:block"
    />
    <div class="mx-4 flex flex-col sm:ml-20">
      <h1 class="text-6xl mb-2">Projects</h1>
      <h2 class="text-xl mb-16">
        Here are some of my projects. Hover them for more information.
      </h2>

      <!-- Project cards -->
      <div class="flex flex-row flex-wrap w-full gap-x-8 gap-y-7">
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
    </div>
  </div>
</section>
