<template>
    <header>
        <div class="fume"></div>
        <div class="container">
            <div class="topo">
                <TagAbertura 
                    linha="1"
                    tag="section"
                    class="ok"
                    tituloClass="containerBanner"
                    identacao = "0"
                    :left="store.getters.gettersIdentacao"
                ></TagAbertura>

                <TagAbertura 
                    linha="2"
                    tag="img"
                    class="ok"
                    tituloClass="imgBanner"
                    src="ok"
                    tituloSrc="../assets/imgs/banner.jpg"
                    identacao = "1"
                    :left="store.getters.gettersIdentacao"
                ></TagAbertura>
            </div>

            <div class="centro">
                <TagAbertura 
                    linha="3"
                    tag="h1"
                    class="ok"
                    tituloClass="titulo"
                    id="ok"
                    tituloId="titulo"
                    identacao = "1"
                    :left="store.getters.gettersIdentacao"
                ></TagAbertura>

                    <div class="boxLinhasTitulo">
                        <div class="box_numero_txt">
                            <div class="boxLinha">
                                <p class="cinza">4</p>
                            </div>
                            
                            <h1 class="textoTitulo" :style="{marginLeft: `${2 * parseInt(store.getters.gettersIdentacao)}px`}">
                                VAGNER COSTA
                            </h1>
                            <p>{{ store.getters.gettersIdentacao }}</p>
                        </div>
                        <TagFechamento 
                            tag="br" 
                            linha="0" 
                            identacao = "0"
                            :left="0"
                            visualizar="null"
                        ></TagFechamento>
                    </div>
                    
                    <div class="boxLinhasTitulo">
                        <div class="box_numero_txt">
                            <div class="boxLinha">
                                <p class="cinza">5</p>
                            </div>

                            <h1 class="textoTitulo" :style="{marginLeft: `${2 * parseInt(store.getters.gettersIdentacao)}px`}">
                                DESENVOLVEDOR
                            </h1>
                        </div>
                        <TagFechamento 
                            tag="br" 
                            linha="0" 
                            identacao = "0"
                            :left="0"
                            visualizar="null"
                        ></TagFechamento>
                    </div>
                    
                    <div class="boxLinhasTitulo">
                        <div class="box_numero_txt">
                            <div class="boxLinha">
                                <p class="cinza">6</p>
                            </div>

                            <h1 class="textoTitulo" :style="{marginLeft: `${2 * parseInt(store.getters.gettersIdentacao)}px`}">
                                FRONT-END
                            </h1>
                        </div>
                        <TagFechamento 
                            tag="br" 
                            linha="0" 
                            identacao = "0"
                            :left="0"
                            visualizar="null"
                        ></TagFechamento>
                    </div>
                    
                    <TagFechamento 
                        tag="h1" 
                        linha="7" 
                        identacao = "1"
                        :left="store.getters.gettersIdentacao"
                        visualizar=""
                    ></TagFechamento>
            </div>

            <div class="baixo">
                <TagFechamento 
                    tag="section" 
                    linha="8" 
                    identacao = "0"
                    :left="store.getters.gettersIdentacao"
                    visualizar=""
                ></TagFechamento>
            </div>
        </div>
    </header>
</template>

<script setup>
    import TagAbertura from "@/components/tagAbertura.vue"
    import TagFechamento from "@/components/tagFechamento.vue"
    import { useStore } from "vuex";

    const store = useStore()

</script>

<style scoped>
    header{
        width:100vw;
        height:fit-content;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:0px;
        position:relative;
        background-image:url("@/assets/logos/fundo-banner.jpg");
        background-position:center center;
        background-size:cover;
        background-repeat:no-repeat;
    }
    .fume{
        width:100%;
        height:100%;
        position:absolute;
        background-color:rgba(0,0,0,0.8);
        left:0px;
        z-index:2;
    }
    .container{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:flex-start;
        z-index:3;
        width:100%;
        height:100%;
        padding:10px 5px;
    }
    .topo{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
    }
    .boxLinha{
        min-width:50px;
        display:block;
        padding-right:20px;
        display:flex;
        justify-content:flex-end;
    }
    .centro{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        margin:40px 0px;
    }
    
    .textoTitulo{
        font-family:var(--font-titulo);
        font-size:100px;
        padding-right:10px;
        color:var(--cor-branco);
        line-height:80px;
        letter-spacing:1px;
        text-shadow:6px 6px 0px #151515;
    }
    .boxLinhasTitulo{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        align-items:flex-end;
        flex-wrap:wrap;
    }
    .box_numero_txt{
        display:flex;
        flex-direction:row;
        align-items:flex-end;
    }

  @media screen and (min-width:0px) and (max-width:440px){
    .boxLinhasTitulo{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:flex-end;
        flex-wrap:wrap;
    }
    .textoTitulo{
        font-size:45px;
        padding-right:5px;
        line-height:45px;
    }
    .boxLinha{
        display:none;
    }
  }
  @media screen and (min-width:441px) and (max-width:710px){
    .textoTitulo{
        font-size:65px;
        padding-right:5px;
        line-height:55px;
    }
    .boxLinha{
        display:none;
    }
  }
  @media screen and (min-width:711px) and (max-width:868px){
    .textoTitulo{
        font-size:85px;
        padding-right:5px;
        line-height:75px;
    }
    .textoTitulo{
        font-family:var(--font-titulo);
        font-size:100px;
        padding-right:10px;
        color:var(--cor-branco);
        line-height:80px;
        letter-spacing:1px;
        text-shadow:6px 6px 0px #151515;
    }
    .boxLinha{
        display:none;
    }
  }
</style>