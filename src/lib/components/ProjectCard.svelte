<script>
  export let name = '';
  export let description = '';
  export let languages = [];
  export let liveURL = '';
  export let sourceURL = '';
  export let thumbnail = '';
  export let thumbnailScale = '1';
  export let alt = '';

  languages = languages.slice(0, 3);
</script>

<div
  class="flex w-[500px] min-w-[300px] max-w-full aspect-[1.61/1] relative overflow-clip group sm:-skew-x-[5deg]"
>
  <img
    src={thumbnail}
    {alt}
    class="absolute w-full h-auto -z-[1] group-hover:brightness-75 group-hover:blur-[2px] self-center"
    style="scale: {thumbnailScale}"
  />
  <div
    id="content"
    class="flex-col w-full h-full p-3 justify-end hidden relative group-hover:flex"
  >
    <!-- Name and Description -->
    {#if name}
      <h2 class="mb-2 text-2xl font-bold sm:text-3xl">{name}</h2>
    {/if}
    {#if description}
      <p class="mb-2">{description}</p>
    {/if}
    <div class="flex flex-row justify-between">
      <!-- Links -->
      <div id="links" class="flex flex-row space-x-2">
        {#if liveURL}
          <a
            href={liveURL}
            target="_blank"
            rel="noreferrer"
            class="flex items-center px-3 py-2 bg-lime-500 hover:bg-lime-600"
          >
            <i class="bx bx-world px-1" />
            <p>LIVE SITE</p>
          </a>
        {/if}
        {#if sourceURL}
          <a
            href={sourceURL}
            target="_blank"
            rel="noreferrer"
            class="flex items-center px-3 py-2 bg-lime-500 hover:bg-lime-600"
          >
            <i class="bx bx-code pr-2" />
            <p>SOURCE</p>
          </a>
        {/if}
      </div>

      <!-- Languages -->
      <div id="languages" class="flex flex-row space-x-1">
        {#each languages as language}
          <!-- For some reason, we need flex and items-center to align text in middle -->
          <p
            class="hidden sm:flex items-center px-2 uppercase text-[10px] bg-gray-600 rounded-full"
          >
            {language}
          </p>
        {/each}
      </div>
    </div>
  </div>
</div>
