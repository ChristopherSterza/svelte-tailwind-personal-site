<script>
  import Section from '../components/Section.svelte';
  import SkillCard from '../components/SkillCard.svelte';
  import skillData from '../data/skills.json';
  let skills = skillData.skills;
  skills.sort((a, b) => {
    if (a.knowledgeLevel > b.knowledgeLevel) return -1;
    if (a.knowledgeLevel < b.knowledgeLevel) return 1;
    return 0;
  });
</script>

<div id="skillAnchor" />
<Section isBottom={true}>
  <h1 class="mb-2 text-6xl font-medium">Skills</h1>
  <h2 class="mb-16 text-xl">
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
</Section>
