<script>
  export let isTop = false;
  export let isBottom = false;

  let borderClass = 'sm:border-l-[3px]';
  let sectionSize = '';
  let flexJustification = '';
  let topDotPosition = 'top-[100px]';

  if (isTop) {
    borderClass += ' myBorder';
    sectionSize = 'min-h-screen';
    flexJustification = 'justify-center';
    topDotPosition = 'top-[39%]';
  } else {
    borderClass += ' border-lime-400';
  }
</script>

<section
  class="relative flex flex-col mx-auto px-7 py-20 sm:pl-16 text-white sm:w-4/5 max-w-screen-2xl {borderClass} {sectionSize} {flexJustification}"
>
  <!-- Top Dot -->
  <span
    class="hidden absolute w-[21px] h-[21px] bg-lime-400 rounded-full shrink-0 sm:block -left-[12px] {topDotPosition}"
  />
  <slot />
  {#if isBottom}
    <!-- Bottom Dot -->
    <span
      class="hidden absolute w-[21px] h-[21px] bg-lime-400 rounded-full sm:block shrink-0 -left-[12px] bottom-0"
    />
  {/if}
</section>

<style lang="postcss">
  .myBorder {
    border-image: linear-gradient(
        to top,
        theme('colors.lime.400') 60%,
        transparent 40%
      )
      1;
  }
</style>
