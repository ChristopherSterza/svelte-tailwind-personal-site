<script>
  export let src = '';
  export let alt = '';
  export let label = '';
</script>

<div
  class="flex flex-row mr-3 mb-3 px-2 py-2 bg-[#1d1d1d] justify-between items-center rounded-md"
>
  <img {src} {alt} class="mr-4" />
  <p class="text-xs font-bold uppercase sm:text-sm">{label}</p>
</div>
