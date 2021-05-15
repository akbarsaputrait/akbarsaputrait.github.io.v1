<template>
  <div
    class="mx-8 md:mx-20 flex h-full items-center flex-col md:flex-row md:gap-0 gap-5 md:my-0 my-10"
  >
    <div class="flex flex-col w-full md:w-3/5">
      <p
        class="text-5xl md:text-7xl font-normal m-0 mb-3 uppercase tracking-normal"
      >
        Akbar Anung
        <span class="font-extrabold">Yudha</span> Saputra
      </p>
      <p class="text-2xl italic">
        Semi-Senior Web Developer - 3 Years Experience
      </p>
      <div class="flex mt-8 gap-3">
        <a href="https://github.com/akbarsaputrait" class="hover:underline" target="_blink"
          >GitHub</a
        >
        <span>-</span>
        <a
          href="https://www.linkedin.com/in/akbarsaputrait/" target="_blink"
          class="hover:underline"
          >Linkedin</a
        >
        <span>-</span>
        <a href="https://twitter.com/akbarsaputrait" class="hover:underline" target="_blink"
          >Twitter</a
        >
        <span>-</span>
        <a
          href="https://www.instagram.com/akbarsaputrait" target="_blink"
          class="hover:underline"
          >Instagram</a
        >
      </div>
    </div>
    <div class="flex items-center justify-center w-full md:w-3/5 lg:w-full">
      <Timeline :list="timeList" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Timeline from './components/Timeline.vue'

export default defineComponent({
  name: 'App',
  components: {
    Timeline,
  },
  setup: () => {
    const timeList = ref([
      {
        date: '26 December 2000',
        title: 'Born to the world 👶',
        description: 'I was born in Pasuruan, Indonesia.',
      },
      {
        date: '2 January 2018',
        title: 'Intership Program 👨‍🎓',
        description:
          '3 Months internship at <a href="https://inagata.com/" class="hover:underline italic" target="_blank">Inagata Technosmith</a>.',
      },
      {
        date: '30 June 2019',
        title: 'First job i had 🎉',
        description:
          'Remote Frontend Web Developer at <a href="https://keeppack.id" class="hover:underline italic" target="_blank">Keeppack.id Client & Staff Portal</a>. January 2021 is the last time I work here.',
      },
      {
        date: '1 September 2019',
        title: 'New project 👷‍♂️',
        description:
          '<a href="https://bonbon.co.id" class="hover:underline italic" target="_blank">BonBon</a> is an app that make it easy to order menu at the Restaurant and also have a bill splitting feature. I was working at <a href="https://admin.bonbon.co.id/login" class="hover:underline italic" target="_blank">BonBon Portal</a> as a Frontend Developer for ± 8 months.',
      },
      {
        date: 'Currently',
        title: 'Student & Freelance Web Developer 💻',
        description: `I'm an Informatics Student at <a href="https://umm.ac.id" class="hover:underline italic" target="_blank">University of Muhammadiyah Malang</a> since August 2019. But in my daily life, I also have a side job as a Freelance Frontend Developer and currently have a project are in progress.`,
      },
    ])
    return { timeList }
  },
})
</script>

<style lang="scss">
@import './assets/styles/style.scss';

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  width: 10em;
}
</style>
