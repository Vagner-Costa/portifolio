<template>
    <div class="containerLinhaTag">
        <div class="boxLinha" v-if="props.visualizar !== 'null'">
            <p class="cinza">{{ props.linha }}</p>
        </div>

        <div class="containerTag" 
            :style="{marginLeft: `${parseInt(props.identacao) * parseInt(props.left)}px`}"
        >
            <p class="cinza">&lt;</p>
            <p class="cinza barra">/</p>
            <p class="azul">{{ props.tag }}</p>
            <p class="cinza espacamento">&gt;</p>
        </div>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'
    const props = defineProps(['tag','linha','identacao','left','visualizar'])
</script>

<style scoped>
    .containerLinhaTag{
        display:flex;
        flex-direction:row;
        justify-content:flex-start; 
    }
    .boxLinha{
        min-width:50px;
        display:block;
        padding-right:20px;
        display:flex;
        justify-content:flex-end;
    }
    .containerTag{
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-bottom:5px;
    }
    @media screen and (min-width:0px) and (max-width:650px){
        .boxLinha{
            display:none;
        }
  }



</style>