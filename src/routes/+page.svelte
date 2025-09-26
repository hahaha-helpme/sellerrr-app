<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  const { head, body } = data.page;
</script>

<svelte:head>
  {@html head}
</svelte:head>

{@html body}
