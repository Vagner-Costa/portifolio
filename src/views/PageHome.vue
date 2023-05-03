<script setup>
  import {onBeforeMount} from 'vue'
  import {useStore} from 'vuex'
  import bannerInicial from '@/components/bannerInicial.vue'
  import sobreMim from '@/components/sobreMim.vue'
  import meusConhecimentos from '@/components/meusConhecimentos.vue'
  import meusProjetos from '@/components/meusProjetos.vue'

  const store = useStore()

  onBeforeMount(()=>{
    store.dispatch('actionsDimensoes')
    window.addEventListener('resize',()=>{
      store.dispatch('actionsDimensoes')
    })
  })
</script>

<template>
  <section class="pagina" ref="pagina">
    <bannerInicial></bannerInicial>
    <sobreMim></sobreMim>
    <meusConhecimentos></meusConhecimentos>
    <meusProjetos></meusProjetos>
  </section>
</template>

<style scoped>
  .pagina{
    width:100vw;
    position:relative;
  }



</style>
