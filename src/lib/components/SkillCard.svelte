<script>
  import LabelCard from './LabelCard.svelte';

  export let name = '';
  export let knowledgeLevel = 0;
  export let labels = [];
</script>

<div
  class="flex flex-col w-full p-6 bg-[#313131] overflow-hidden sm:-skew-x-[5deg] rounded-lg"
  data-animate
>
  <!-- Skill Name -->
  <h1 class="mb-6 text-2xl font-semibold sm:text-3xl">{name}</h1>
  <!-- Knowledge Bar -->
  <div id="knowledgeBarWrapper" class="relative w-full h-[15px] mb-1">
    <div
      id="knowledgeBarBackground"
      class="absolute w-full h-full bg-[#1d1d1d] rounded-l-lg rounded-r-lg"
    />
    <div
      id="knowledgeBarForeground"
      class="absolute h-full rounded-l-lg rounded-r-lg shadow-lg bg-lime-400 shadow-lime-800"
      style="width: {knowledgeLevel}%;"
    />
  </div>
  <div class="flex flex-row justify-between mb-4 text-gray-300">
    <p class="text-xs font-semibold uppercase sm:text-base">Beginner</p>
    <p class="hidden font-semibold uppercase sm:inline">Intermediate</p>
    <p class="text-xs font-semibold uppercase sm:text-base">Advanced</p>
  </div>

  <div class="flex flex-row flex-wrap">
    {#each labels as label}
      <LabelCard
        {label}
        src={`/assets/svg/${label.toLowerCase().split(' ').join('_')}.svg`}
        alt={label}
      />
    {/each}
  </div>
</div>
