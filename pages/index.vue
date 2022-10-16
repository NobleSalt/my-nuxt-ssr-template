<script setup>
import { useAsync, useContext, useRouter } from '@nuxtjs/composition-api'
const router = useRouter()
const { $axios } = useContext()
const content = useAsync(() => {
  return $axios.$get('https://sports.api.decathlon.com/sports')
})
</script>

<template>
  <div>
    <div class="green">green</div>
    <ul>
      <li :key="item.id" v-for="(item, index) in content.data">
        index: {{ index }} type: {{ item.type }} sports:
        {{ item.attributes.name }}
      </li>
    </ul>
    <Tutorial />
  </div>
</template>

<style lang="scss">
.green {
  color: $green;
}
</style>
