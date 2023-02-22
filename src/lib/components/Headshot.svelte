<script>
  import headshot from '$lib/assets/png/headshot.png';

  let imageSize = `max-w-[250px] sm:max-w-[350px]`;
</script>

<div class="relative pointer-events-none {imageSize}">
  <div
    class="absolute w-full h-full rounded-full shadow-xl -left-2 -bottom-2 bg-lime-400 shadow-lime-900"
  />
  <img src={headshot} alt="Headshot" class="relative rounded-full" />
</div>
