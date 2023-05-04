<template>
    <div class="containerLinhaTag">
        <div class="boxLinha">
            <p class="cinza">{{ props.linha }}</p>
        </div>

        <div class="containerTag" :style="{marginLeft: `${parseInt(props.identacao) * parseInt(props.left)}px`}">
            <p class="cinza">&lt;</p>
            <p class="azul espacamento">{{ props.tag }}</p>

            <div class="box espacamento" v-show="props.tituloClass">
                <p class="azulClaro">class</p>
                <p class="branco">=</p>
                <p class="marrom">"{{  props.tituloClass }}"</p>
            </div>

            <div class="box espacamento" v-show="props.tituloId">
                <p class="azulClaro">id</p>
                <p class="branco">=</p>
                <p class="marrom">"{{  props.tituloId }}"</p>
            </div>

            <div class="box espacamento" v-show="props.tituloSrc && !props.srcBind">
                <p class="azulClaro">src</p>
                <p class="branco">=</p>
                <p class="marrom">"{{  props.tituloSrc }}"</p>
            </div>

            <div class="box espacamento" v-show="props.srcBind === 'ok'">
                <p class="branco">:</p>
                <p class="azulClaro">src</p>
                <p class="branco">="</p>
                <p class="amarelo">&#123; </p>
                <p class="azulClaro">{{  props.tituloSrc }}</p>
                <p class="amarelo"> &#125;</p>
                <p class="branco">"</p>
            </div>

            <div class="box espacamento" v-show="props.tituloAlt">
                <p class="azulClaro">alt</p>
                <p class="branco">=</p>
                <p class="marrom">"{{  props.tituloAlt }}"</p>
            </div>

            <div class="box espacamento" v-show="props.tituloHref">
                <p class="azulClaro">href</p>
                <p class="branco">=</p>
                <p class="marrom">"</p>
                <p class="marrom">{{ tituloHref }}</p>
                <p class="marrom espacamento">"</p>
                <p class="azulClaro">target</p>
                <p class="branco">=</p>
                <p class="marrom">"_self"</p>
            </div>

            <div class="box espacamento" v-show="props.array">
                <p class="roxo">v-for</p>
                <p class="branco">="</p>
                <p class="amarelo">&#40; </p>
                <p class="azulClaro">{{ props.individual }}</p>
                <p class="branco espacamento">,</p>
                <p class="azulClaro">index </p>
                <p class="amarelo espacamento">&#41; </p>
                <p class="azul espacamento">in</p>
                <p class="azulClaro">{{ props.array }}</p>
                <p class="branco espacamento">" </p>
                <p class="branco ">:</p>
                <p class="azulClaro">Key</p>
                <p class="branco">="</p>
                <p class="amarelo">&#123; </p>
                <p class="azulClaro">index</p>
                <p class="amarelo">&#125; </p>
                <p class="branco">"</p>
            </div>

            <p class="cinza">&gt;</p>
        </div>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'

    const props = defineProps([
        'tag','tituloClass','tituloId','srcBind','tituloSrc','tituloAlt',
        'array','individual','left','linha','identacao','tituloHref'
    ])

</script>

<style scoped>
    .containerLinhaTag{
        display:flex;
        flex-direction:row;
        justify-content:flex-start; 
        flex-wrap:nowrap;
    }
    .boxLinha{
        width:50px;
        min-width:50px;
        display:block;
        padding-right:20px;
        display:flex;
        justify-content:flex-end;
    }
    .containerTag{
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        align-items:center;
        margin-bottom:7px;
        flex-wrap:wrap;
        margin-left:10px;
    }
    .box{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
    }
    .espacamento{
        margin-right:10px;
    }
    .cancela_espaco{
        margin-left:-8px;
    }

    @media screen and (min-width:0px) and (max-width:650px){
        .boxLinha{
            display:none
        }
    }




</style>