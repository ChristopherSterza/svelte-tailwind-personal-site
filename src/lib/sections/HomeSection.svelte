<script>
  import Headshot from '../components/Headshot.svelte';

  let linkedinURL = 'https://www.linkedin.com/in/christophersterza';
  let githubURL = 'https://github.com/christophersterza';
  let twitterURL = 'https://twitter.com/ChrisSterza';
</script>

<section
  class="container h-screen mx-auto flex flex-col justify-center text-white"
>
  <!-- Spacer -->
  <div class="h-[35%]" />
  <div class="h-[65%] flex flex-col sm:border-l-4 sm:border-lime-400 mx-4">
    <span
      class="hidden relative w-[20px] h-[20px] bg-lime-400 rounded-full -left-3 shrink-0 sm:block"
    />
    <div class="ml-4 w-fit flex flex-col sm:ml-20">
      <!-- Headshot -->
      <div id="headshotWrapper" class="mb-8 -mt-48">
        <Headshot />
      </div>

      <!-- Title Text -->
      <h1 class="text-xl font-extrabold">
        <span class="text-lime-400">HI</span> THERE! I'M
      </h1>
      <p class="mb-4 text-6xl font-semibold break-words">Chris Sterza</p>

      <!-- Description List -->
      <ul class="list-inside list text-lime-400 text-xl mb-6">
        <li class="flex flex-row items-center">
          <span
            class="block w-[12px] h-[3px] mr-4 bg-lime-400 rounded-full shrink-0"
          />
          <span class="block font-normal">full stack developer</span>
        </li>
        <li class="flex flex-row items-center">
          <span
            class="block w-[12px] h-[3px] mr-4 bg-lime-400 rounded-full shrink-0"
          />
          <span class="block font-normal">designer</span>
        </li>
        <li class="flex flex-row items-center">
          <span
            class="block w-[12px] h-[3px] mr-4 bg-lime-400 rounded-full shrink-0"
          />
          <span class="block font-normal">animal lover</span>
        </li>
      </ul>

      <!-- Socials -->
      <div class="flex flex-row mb-6">
        <a href={linkedinURL} target="_blank" rel="noreferrer">
          <i
            class="bx bxl-linkedin text-5xl mr-2 opacity-60 hover:opacity-100 transition ease-in-out duration-300"
          />
        </a>
        <a href={githubURL} target="_blank" rel="noreferrer">
          <i
            class="bx bxl-github text-5xl mr-2 opacity-60 hover:opacity-100 transition ease-in-out duration-300"
          />
        </a>
        <a href={twitterURL} target="_blank" rel="noreferrer">
          <i
            class="bx bxl-twitter text-5xl mr-2 opacity-60 hover:opacity-100 transition ease-in-out duration-300"
          />
        </a>
      </div>

      <!-- Buttons -->
      <div class="flex flex-col gap-4 mb-6 sm:flex-row">
        <button
          class="w-11/12 bg-lime-500 rounded-full px-4 py-1 text-lg font-semibold sm:w-1/2"
        >
          Projects
        </button>
        <button
          class="w-11/12 bg-lime-500 rounded-full px-4 py-1 text-lg font-semibold
          sm:w-1/2"
        >
          Skills
        </button>
      </div>
    </div>
  </div>
</section>
