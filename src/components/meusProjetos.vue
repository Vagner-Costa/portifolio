<template>
    <section class="container">
        <TagAbertura 
            linha="35"
            tag="article"
            class="ok"
            tituloClass="containerContatos"
            identacao = "0"
            :left="store.getters.gettersIdentacao"
        ></TagAbertura>

        <div class="boxTexto">
            <TagAbertura 
                linha="36"
                tag="div"
                class="ok"
                tituloClass="boxSubtituloContatos"
                identacao = "1"
                :left="store.getters.gettersIdentacao"
            ></TagAbertura>

                <div class="boxSubtitulo">
                    <TagAbertura 
                        linha="37"
                        tag="h3"
                        class="ok"
                        tituloClass="subtitulo"
                        id="ok"
                        tituloId="subtitulo"
                        identacao = "2"
                        :left="store.getters.gettersIdentacao"
                    ></TagAbertura>

                    <div class="boxTxtSubtitulo">
                        <p class="subtitulo">CONTATOS</p>
                    </div>
                    
                    <TagFechamento 
                        tag="h3" 
                        linha="38" 
                        identacao = "2"
                        :left="store.getters.gettersIdentacao"
                        visualizar=""
                    ></TagFechamento>
                </div>  
                
            <TagFechamento 
                tag="div" 
                linha="39" 
                identacao = "1"
                :left="store.getters.gettersIdentacao"
                visualizar=""
            ></TagFechamento>    
                   
            <TagAbertura 
                linha="40"
                tag="div"
                class="ok"
                tituloClass="links"
                id="ok"
                tituloId="links"
                identacao = "1"
                :left="store.getters.gettersIdentacao"
            ></TagAbertura>

                <div class="boxLinks">
                    <TagAbertura 
                        linha="41"
                        tag="a"
                        href="ok"
                        tituloHref="https://www.linkedin.com/in/vagner-costa-desenvolvedor/"
                        identacao = "2"                       
                        :left="store.getters.gettersIdentacao"
                    ></TagAbertura>
                        <a class="branco linkedin" href="https://www.linkedin.com/in/vagner-costa-desenvolvedor/" target="_blank">Linkedin</a>
                    <TagFechamento 
                        class="cancelLeft"
                        tag="a" 
                        linha="" 
                        identacao=""
                        :left="null"
                        visualizar=""
                    ></TagFechamento>
                </div>

                <div class="boxLinks">
                    <TagAbertura 
                        linha="42"
                        tag="a"
                        href="ok"
                        tituloHref="https://github.com/Vagner-Costa"
                        identacao = "2"
                        :left="store.getters.gettersIdentacao"
                    ></TagAbertura>
                        <a class="branco github" href="https://github.com/Vagner-Costa" target="_Blank">Github</a>
                    <TagFechamento 
                        class="cancelLeft"
                        tag="a" 
                        linha="" 
                        identacao = ""
                        :left="null"
                        visualizar=""
                    ></TagFechamento>
                </div>
            <TagFechamento 
                tag="div" 
                linha="43" 
                identacao = "1"
                :left="store.getters.gettersIdentacao"
                visualizar=""
            ></TagFechamento>

            <TagAbertura 
                linha="44"
                tag="div"
                class="ok"
                tituloClass="contatos"
                id="ok"
                tituloId="contatos"
                identacao = "1"
                :left="store.getters.gettersIdentacao"
            ></TagAbertura>

                <div class="boxLinks">
                    <TagAbertura 
                        linha="45"
                        tag="img"
                        src="ok"
                        tituloSrc="../assets/logos/email.png"
                        alt="ok"
                        tituloAlt="img"
                        identacao = "2"
                        :left="store.getters.gettersIdentacao"
                    ></TagAbertura>
                        <div class="box_zap_mail">
                            <img class="mail" src="../assets/logos/email.png" alt="">
                            <p class="verde">&#60; !-- vagner.caragua@gmail.com -- &#62;</p>
                        </div>
                </div>

                <div class="boxLinks">
                    <TagAbertura 
                        linha="46"
                        tag="img"
                        src="ok"
                        tituloSrc="../assets/logos/whatsapp.png"
                        alt="ok"
                        tituloAlt="img"
                        identacao="2"
                        :left="store.getters.gettersIdentacao"
                    ></TagAbertura>
                        <div class="box_zap_mail">
                            <img class="zap" src="../assets/logos/whatsapp.png" alt="whatsapp">
                            <p class="verde">&#60; !-- (12) 98117-2244 -- &#62;</p>
                        </div> 
                </div>

        <TagFechamento 
            tag="div" 
            linha="47" 
            identacao = "1"
            :left="store.getters.gettersIdentacao"
            visualizar=""
        ></TagFechamento>
        </div>
        <TagFechamento 
            tag="article" 
            linha="48" 
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
    a{
        margin:0px;
    }
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
    .boxSubtitulo{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-start;
    }
    .boxTxtConhecimentos{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }
    .boxNumIdentificacao{
        width:50px;
        padding-right:20px;
        display:flex;
        justify-content:flex-end;
    }
    .boxLinks{
        width:100%;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
    }
    .cancelLeft{
        margin-left: -40px;
    }
    .zap{
        width:25px;
        height:25px;
        margin-right:7px;
    }
    .mail{
        width:30px;
        height:30px;
        margin-right:7px;
    }
    .box_zap_mail{
        display:flex;
        flex-direction:row;
        justify-content:center;
    }
    .linkedin, .github{
        display:flex;
        justify-content:center;
        font-size:24px;
        letter-spacing: 2px;
        cursor:pointer;
    }
    @media screen and (min-width:0px) and (max-width:650px){
        .boxTxtConhecimentos{
            justify-content:center;
        }
        .boxNumIdentificacao{
            display:none;
        }
        .cancelLeft{
            margin-left:20px;
        }
        .boxLinks{
            width:100%;
            display:flex;
            flex-direction:column;
            justify-content:flex-start;
            flex-wrap:no-wrap;
        }
        .linkedin, .github{
            display:flex;
            justify-content:center;
            font-size:24px;
            letter-spacing: 2px;
        }
        .box_zap_mail{
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
    @media screen and (min-width:651px) and (max-width:768px){
        .boxTxtConhecimentos{
            justify-content:center;
        }
        .boxNumIdentificacao{
            display:none;
        }
        .cancelLeft{
            margin-left:20px;
        }
        .boxLinks{
            width:100%;
            display:flex;
            flex-direction:column;
            justify-content:flex-start;
            flex-wrap:no-wrap;
        }
        .linkedin, .github{
            display:flex;
            justify-content:center;
            font-size:24px;
            letter-spacing: 2px;
        }
        .box_zap_mail{
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
</style>