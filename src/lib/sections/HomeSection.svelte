<script>
  import Section from '../components/Section.svelte';
  import Headshot from '../components/Headshot.svelte';

  let linkedinURL = 'https://www.linkedin.com/in/christophersterza';
  let githubURL = 'https://github.com/christophersterza';
  let twitterURL = 'https://twitter.com/ChrisSterza';
</script>

<Section isTop={true}>
  <div class="flex flex-col w-fit">
    <!-- Headshot -->
    <div id="headshotWrapper" class="mb-8" data-animate>
      <Headshot />
    </div>

    <!-- Title Text -->
    <h1 class="text-xl font-extrabold" data-animate>
      <span class="text-lime-400">HI</span> THERE! I'M
    </h1>
    <!-- #TODO: redo this in a more svelte-eque way. -->
    <div id="nameWrapper" data-animate>
      <p class="mb-4 text-6xl font-semibold break-words lg:hidden">
        Chris Sterza
      </p>
      <p class="hidden mb-4 text-6xl font-semibold break-words lg:block">
        Christopher Sterza
      </p>
    </div>

    <!-- Description List -->
    <ul class="mb-6 text-xl list-inside list text-lime-400" data-animate>
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
        <span class="block font-normal">animal enthusiast</span>
      </li>
    </ul>

    <!-- Socials -->
    <div class="flex flex-row mb-6" data-animate>
      <a href={linkedinURL} target="_blank" rel="noreferrer">
        <i
          class="mr-2 text-5xl transition duration-300 ease-in-out bx bxl-linkedin opacity-60 hover:opacity-100"
        />
      </a>
      <a href={githubURL} target="_blank" rel="noreferrer">
        <i
          class="mr-2 text-5xl transition duration-300 ease-in-out bx bxl-github opacity-60 hover:opacity-100"
        />
      </a>
      <a href={twitterURL} target="_blank" rel="noreferrer">
        <i
          class="mr-2 text-5xl transition duration-300 ease-in-out bx bxl-twitter opacity-60 hover:opacity-100"
        />
      </a>
    </div>

    <!-- Buttons -->
    <div class="flex flex-col gap-4 mb-6 sm:flex-row">
      <button
        id="projectButton"
        class="w-full bg-lime-600 rounded-full px-4 py-1 text-lg font-semibold sm:w-1/2 hover:bg-lime-800 duration-200 hover:-skew-y-[8deg] hover:rotate-[8deg]"
        data-animate
      >
        Projects
      </button>
      <button
        id="skillButton"
        class="flex justify-center w-full bg-lime-600 rounded-full px-4 py-1 text-lg font-semibold sm:w-1/2 hover:bg-lime-800 duration-200 hover:-skew-y-[8deg] hover:rotate-[8deg]"
        data-animate
      >
        Skills
      </button>
    </div>
  </div>
</Section>
