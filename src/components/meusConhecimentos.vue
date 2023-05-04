<template>
    <section class="container">
        <TagAbertura 
            linha="24"
            tag="section"
            tituloClass="containerTecnologias"
            identacao = "0"
            :left="store.getters.gettersIdentacao"
        ></TagAbertura>
 
        <div class="boxTexto">
            <TagAbertura 
                linha="25"
                tag="div"
                tituloClass="boxSubtitulo"
                identacao = "1"
                :left="store.getters.gettersIdentacao"
            ></TagAbertura>


                <TagAbertura 
                    linha="26"
                    tag="h3"
                    tituloClass="subtitulo"
                    tituloId="subtitulo"
                    identacao = "2"
                    :left="store.getters.gettersIdentacao"
                ></TagAbertura>

                    <div class="boxTxtSubtitulo">
                        <p class="subtitulo">TECNOLOGIAS</p>
                    </div>
                    
                <TagFechamento 
                    tag="h3" 
                    linha="27" 
                    identacao = "2"
                    :left="store.getters.gettersIdentacao"
                    visualizar=""
                ></TagFechamento>


            <TagFechamento 
                tag="div" 
                linha="28" 
                identacao = "1"
                :left="store.getters.gettersIdentacao"
                visualizar=""
            ></TagFechamento>
        </div>

        <TagAbertura 
            linha="29"
            tag="div"
            tituloClass="boxImgTecnologias"
            identacao = "1"
            :left="store.getters.gettersIdentacao"
        ></TagAbertura>

        <TagAbertura 
            linha="30"
            tag="div"
            tituloClass="Tecnologias"
            individual="tec"
            array="tecnologias"
            identacao = "2"
            :left="store.getters.gettersIdentacao"
        ></TagAbertura>

        <TagAbertura 
            linha="31"
            tag="img"
            tituloClass="ImgTecnologias"
            srcBind="ok"
            tituloSrc="tec"
            identacao = "3"
            :left="store.getters.gettersIdentacao"
        ></TagAbertura>

        <div class="boxTecnologias">
            <div class="containerImg">
                <div class="boxImg">
                    <img src="@/assets/logos/vue.svg" alt="" class="imgTecnologias">
                </div>
                <p class="verde nome_tecno">&#60; !-- Vuejs -- &#62;</p>
            </div>

            <div class="containerImg">
                <div class="boxImg">
                    <img src="@/assets/logos/node.svg" alt="" class="imgTecnologias">
                </div>
                <p class="verde nome_tecno">&#60; !-- Nodejs -- &#62;</p>
            </div>

            <div class="containerImg">
                <div class="boxImg">
                    <img src="@/assets/logos/mongo.png" alt="" class="imgTecnologias">
                </div>
                <p class="verde nome_tecno">&#60; !-- Mongodb -- &#62;</p>
            </div>

            <div class="containerImg">
                <div class="boxImg">
                    <img src="@/assets/logos/javascript.svg" alt="" class="imgTecnologias">
                </div>
                <p class="verde nome_tecno">&#60; !-- Javascript -- &#62;</p>
            </div>

            <div class="containerImg">
                <div class="boxImg">
                    <img src="@/assets/logos/css3.svg" alt="" class="imgTecnologias">
                </div>
                <p class="verde nome_tecno">&#60; !-- CSS3 -- &#62;</p>
            </div>

            <div class="containerImg">
                <div class="boxImg">
                    <img src="@/assets/logos/tailwind-css.svg" alt="" class="imgTecnologias">
                </div>
                <p class="verde nome_tecno">&#60; !-- Tailwind -- &#62;</p>
            </div>

            <div class="containerImg">
                <div class="boxImg">
                    <img src="@/assets/logos/html5.svg" alt="" class="imgTecnologias">
                </div>
                <p class="verde nome_tecno">&#60; !-- HTML5 -- &#62;</p>
            </div>

            <div class="containerImg">
                <div class="boxImg">
                    <img src="@/assets/logos/git.svg" alt="" class="imgTecnologias">
                </div>
                <p class="verde nome_tecno">&#60; !-- Git -- &#62;</p>
            </div>
            <div class="containerImg">
                <div class="boxImg">
                    <img src="@/assets/logos/github.svg" alt="" class="imgTecnologias">
                </div>   
                <p class="verde nome_tecno">&#60; !-- Github -- &#62;</p>
            </div>
            <div class="containerImg">
                <div class="boxImg">
                    <img src="@/assets/logos/docker.svg" alt="" class="imgTecnologias">
                </div>
                <p class="verde nome_tecno">&#60; !-- Docker -- &#62;</p>
            </div>
            
            <div class="containerImg">
                <div class="boxImg">
                    <img src="@/assets/logos/react.svg" alt="" class="imgTecnologias">
                </div>
                <p class="verde nome_tecno">&#60; !-- React -- &#62;</p>
            </div>
            
            <div class="containerImg">
                <div class="boxImg">
                    <img src="@/assets/logos/react.svg" alt="" class="imgTecnologias">
                </div>
                <p class="verde nome_tecno">&#60; !-- React Native -- &#62;</p>
            </div>
        </div>

        <TagFechamento 
            tag="div" 
            linha="32" 
            identacao = "2"
            :left="store.getters.gettersIdentacao"
            visualizar=""
        ></TagFechamento>

        <TagFechamento 
            tag="div" 
            linha="33" 
            identacao = "1"
            :left="store.getters.gettersIdentacao"
            visualizar=""
        ></TagFechamento>

        <TagFechamento 
            tag="section" 
            linha="34" 
            identacao = "0"
            :left="store.getters.gettersIdentacao"
            visualizar=""
        ></TagFechamento>
    </section>
</template>

<script setup>
import TagAbertura from '@/components/tagAbertura.vue'
import TagFechamento from '@/components/tagFechamento.vue'

import { useStore } from "vuex";

    const store = useStore()


</script>

<style scoped>
    .container{
        width:100vw;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:flex-start;
        padding:10px 5px;
        position:relative;
    }
    .boxTexto{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
    }
    .boxNumIdentificacao{
        width:50px;
        padding-right:20px;
        display:block;
        display:flex;
        justify-content:flex-end;
    }
    .boxTecnologias{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
        flex-wrap:wrap;
        padding:10px 100px;
    }
    .containerImg{
        width:180px;
        min-width:180px;
        height:120px;
        min-height:120px;
        margin:5px 5px;
        position:relative;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
    }
    .boxImg{
        width:90px;
        height:90px;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:10px;
    }
    .nome_tecno{
        width:100%;
        text-align:center
    }
    .imgTecnologias{
        width:100%;
        height:100%;
        object-fit:contain;
    }
    .fume{
        width:100%;
        height:100%;
        position:absolute;
        background-color:rgba(0,0,0,0.4);
    }
    .fume:hover{
        background-color:rgba(0,0,0,0.1);
    }
    @media screen and (min-width:0px) and (max-width:600px){
        .boxTxtConhecimentos{
            justify-content:center;
        }
        .boxNumIdentificacao{
            display:none;
        }
        .boxTecnologias{
            padding:10px 10px;
        }
        .containerImg{
            width:180px;
            min-width:180px;
            height:120px;
            min-height:120px;
        }
    }
    @media screen and (min-width:601px) and (max-width:768px){
        .boxTecnologias{
            padding:10px 10px;
        }
    }

</style>