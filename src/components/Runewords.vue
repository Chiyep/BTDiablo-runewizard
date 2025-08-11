<template>
  <div>
    <div class="rw-Search flex items-center mb-8">
      <label class="text-gold whitespace-nowrap mr-4">{{ "Search" }}</label>
      <input
        v-model="searchText"
        type="text"
        class="rw-Search-input"
        @input="onSearchInput"
        placeholder="Search runewords by name, type, or description..."
      />
    </div>

    <div>
      <runewords-table :items="runewordsList" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import runewordsData from "@/data/runewords";
import runewordsDesc from "@/data/runewords-descriptions";

import RunewordsTable from "@/components/RunewordsTable.vue";

export default defineComponent({
  name: "Runewords",

  components: {
    RunewordsTable,
  },

  data() {
    return {
      isHelpVisible: false,

      runewordsList: [] as TRunewordItem[],

      searchText: "",
    };
  },

  created() {
    this.runewordsList = runewordsData.map((rw) => {
      const description = runewordsDesc[rw.title] || "";
      return {
        ...rw,
        description,
        filterMatch: true,
      };
    });
    this.updateFilter(this.searchText);
  },

  methods: {
    onSearchInput() {
      this.updateFilter(this.searchText);
    },

    updateFilter(text: string) {
      const searchTerm = text.toLowerCase();

      const matches = (item: TRunewordItem) => {
        const matchesTitle = item.title.toLowerCase().includes(searchTerm);
        const matchesType = item.ttypes.some((type) =>
          type.toLowerCase().includes(searchTerm)
        );
        const matchesDescription = item.description
          ? item.description.toLowerCase().includes(searchTerm)
          : false;

        return (
          searchTerm === "" ||
          matchesTitle ||
          matchesType ||
          matchesDescription
        );
      };

      this.runewordsList.forEach((item) => {
        item.filterMatch = matches(item);
      });
    },
  },
});
</script>
