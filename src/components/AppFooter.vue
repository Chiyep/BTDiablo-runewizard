<template>
  <footer class="rw-Footer min-h-[200px]">
    <div class="rw-Layout-goldBarSeparator opacity-50 mb-6"></div>

    
      <div>
        Original Runewizard Developer
        <a :href="envGithubRepoUrl" class="rw-Footer-link ml-2">
          <icon-github class="ux-icon ux-icon--fw mr-1 mt-[-0.2em]" />
          <span class>{{ "fabd/diablo2-runewizard" }}</span>
        </a>
      </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import IconGithub from "@/icons/IconGithub.vue";

export default defineComponent({
  name: "AppFooter",

  components: {
    IconGithub,
  },

  data() {
    return {
      envGithubRepoUrl: import.meta.env.VITE_URL_GITHUB_REPO as string,
      envMainSiteUrl: import.meta.env.VITE_URL_MAIN_SITE as string,
    };
  },
});
</script>
