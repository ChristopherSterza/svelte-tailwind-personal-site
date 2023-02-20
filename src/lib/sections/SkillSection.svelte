<script>
  import SkillCard from '../components/SkillCard.svelte';
  import skillData from '../data/skills.json';
  let skills = skillData.skills;
  skills.sort((a, b) => {
    if (a.knowledgeLevel > b.knowledgeLevel) return -1;
    if (a.knowledgeLevel < b.knowledgeLevel) return 1;
    return 0;
  });
</script>

<section class="container mx-auto flex flex-col text-white">
  <div class="flex flex-col mx-4 sm:border-l-4 sm:border-lime-400">
    <!-- Dot -->
    <span
      class="hidden relative w-[20px] h-[20px] bg-lime-400 rounded-full -left-3 -bottom-[50px] shrink-0 sm:block"
    />
    <div class="mx-4 flex flex-col sm:ml-20">
      <h1 class="text-6xl mb-2">Skills</h1>
      <h2 class="text-xl mb-16">
        Here are some of my skills and areas of knowledge.
      </h2>

      <!-- Skill cards -->
      <div class="flex flex-col gap-y-7">
        {#each skills as skill}
          <SkillCard
            name={skill.name || ''}
            knowledgeLevel={skill.knowledgeLevel || 0}
            labels={skill.labels || []}
          />
        {/each}
      </div>
    </div>
  </div>
</section>
