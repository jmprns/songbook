<template>
  <v-container>
    <v-card flat>
      <v-card-title class="d-flex align-center pe-2">
        <v-text-field v-model="search" density="compact" label="Search" prepend-inner-icon="mdi-magnify"
          variant="solo-filled" flat hide-details single-line></v-text-field>
      </v-card-title>

      <v-divider></v-divider>

      <v-data-table-virtual v-model:search="search" density="compact" :headers="header" :items="songs" height="90vh"
        item-value="number" hover>
        <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
          <tr>
            <template v-for="column in columns" :key="column.key">
              <td v-if="column.title != 'Artist'">
                <span class="mr-2 cursor-pointer" @click="() => toggleSort(column)">{{ column.title }}</span>
                <template v-if="isSorted(column)">
                  <v-icon :icon="getSortIcon(column)"></v-icon>
                </template>
              </td>
            </template>
          </tr>
        </template>

        <template v-slot:item="{ item }">
          <tr>
            <td>
              <p :style="{ lineHeight: '1em' }">{{ item.raw.title }}</p>
              <p :style="{ marginTop: '-5px', display: 'block', fontSize: '0.75em' }">({{ item.raw.artist }})</p>
            </td>
            <td align="right">{{ item.raw.number }}</td>
          </tr>
        </template>

      </v-data-table-virtual>
    </v-card>
  </v-container>
</template>


<script setup lang="ts">
import songs from '~/assets/songlist.json'

const header = [
  { title: 'Song', align: 'start', key: 'title' },
  { title: 'Number', align: 'end', key: 'number' },
  { title: 'Artist', key: 'artist'},
]

const search = ref('')
document.documentElement.style.overflow = 'hidden'
</script>


<style scoped></style>