<template>
    <div class="container">
        <TagAbertura 
            linha="9"
            tag="section"
            tituloClass="boxSobreMim"
            identacao = "0"
            :left="store.getters.gettersIdentacao"
        ></TagAbertura>

        <div class="boxSobreMim">
            <TagAbertura 
                linha="10"
                tag="h3"
                tituloClass="subtitulo"
                tituloId="subtitulo"
                identacao = "1"
                :left="store.getters.gettersIdentacao"
            ></TagAbertura>

            <div class="boxTxtSubtitulo">
                <p class="subtitulo">SOBRE MIM</p>
            </div>

            <TagFechamento 
                tag="h3" 
                linha="11" 
                identacao = "1"
                :left="store.getters.gettersIdentacao"
                visualizar=""
            ></TagFechamento>
        </div>

        <TagAbertura 
            linha="12"
            tag="article"
            tituloClass="boxTxt"
            tituloId="boxTxt"
            identacao = "1"
            :left="store.getters.gettersIdentacao"
        ></TagAbertura>

        <TagAbertura 
            linha="13"
            tag="img"
            tituloSrc="../assets/foto/foto.jpeg"
            tituloAlt="img"
            identacao = "2"
            :left="store.getters.gettersIdentacao"
        ></TagAbertura>

        <div class="container_img_perfil">
            <div class="box_img_perfil">
                <img src="../assets/foto/foto_eu.jpeg" alt="foto_perfil">
            </div>
        </div>

        <div class="boxConteudoTxt">                        
            <TagAbertura 
                linha="14"
                tag="p"
                tituloClass="txtSobreMim"
                identacao = "2"
                :left="store.getters.gettersIdentacao"
            ></TagAbertura>
                <p class="txtDescricao">
                    Como desenvolvedor front end, estou sempre animado para criar interfaces
                    incríveis e interativas para os usuários. Com habilidades em HTML, CSS, 
                    JavaScript, Vuejs, Nodejs, Mongodb, entre outras posso transformar designs
                    em páginas da web responsivas e atraentes.
                </p>

                <TagFechamento 
                    tag="p" 
                    linha="15" 
                    identacao = "2"
                    :left="store.getters.gettersIdentacao"
                    visualizar=""
                ></TagFechamento>

                <TagAbertura 
                    linha="16"
                    tag="p"
                    tituloClass="txtSobreMim"
                    identacao = "2"
                    :left="store.getters.gettersIdentacao"
                ></TagAbertura> 

                <p class="txtDescricao">
                    Além disso, estou sempre em busca de novas tecnologias e técnicas
                    para melhorar a experiência do usuário e a eficiência do desenvolvimento. Priorizo 
                    sempre a acessibilidade e a usabilidade em minhas criações,
                    garantindo que todos os usuários possam acessar e desfrutar do conteúdo 
                    da melhor maneira possível.
                </p>
                
                <TagFechamento 
                    tag="p" 
                    linha="17" 
                    identacao = "2"
                    :left="store.getters.gettersIdentacao"
                    visualizar=""
                ></TagFechamento>

                <TagAbertura 
                    linha="18"
                    tag="p"
                    tituloClass="txtSobreMim"
                    identacao = "2"
                    :left="store.getters.gettersIdentacao"
                ></TagAbertura> 

                <p class="txtDescricao">
                    Se você precisar de ajuda para criar ou atualizar seu site, não
                    hesite em entrar em contato comigo. Vamos trabalhar juntos para
                    criar algo incrível e eficiente!
                </p>
                
                <TagFechamento 
                    tag="p" 
                    linha="19" 
                    identacao = "2"
                    :left="store.getters.gettersIdentacao"
                    visualizar=""
                ></TagFechamento>

                <TagAbertura 
                    linha="20"
                    tag="p"
                    tituloClass="txtSobreMim"
                    identacao = "2"
                    :left="store.getters.gettersIdentacao"
                ></TagAbertura> 

                <p class="txtDescricao">
                    Atenciosamente, Vagner Costa.
                </p>
                
                <TagFechamento 
                    tag="p" 
                    linha="21" 
                    identacao = "2"
                    :left="store.getters.gettersIdentacao"
                    visualizar=""
                ></TagFechamento>
            <TagFechamento 
                tag="article" 
                linha="22" 
                identacao = "1"
                :left="store.getters.gettersIdentacao"
                visualizar=""
            ></TagFechamento>
        </div>

        <TagFechamento 
            tag="section" 
            linha="23" 
            identacao = "0"
            :left="store.getters.gettersIdentacao"
            visualizar=""
        ></TagFechamento>
    </div>
</template>

<script setup>
    import TagAbertura from "@/components/tagAbertura.vue"
    import TagFechamento from "@/components/tagFechamento.vue"

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
    .box_img_perfil{
        width:250px;
        height:250px;
        border-radius:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        border:solid 5px var(--cor-branco);
    }
    .container_img_perfil{
        width:100%;
        display:flex;
        justify-content:center;
    }
    .boxLinha{
        min-width:50px;
        display:block;
        padding-right:20px;
        display:flex;
        justify-content:flex-end;
    }
    .boxSobreMim{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-start;
    }
    .boxConteudoTxt{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:center;
        padding:0px;
    }
    .boxDescricao{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:flex-start;
        padding:0px;
    }
    .txtDescricao{
        width:100%;
        color:var(--cor-branco);
        text-align:justify;
        padding:10px 150px;
    }
    @media screen and (min-width:0px) and (max-width:600px){
        .boxLinhasTitulo{
            justify-content:center
        }
        .boxLinha{
            display:none;
        }
        .txtDescricao{
            padding:10px 10px;
        }
    }
    @media screen and (min-width:601px) and (max-width:768px){
        .txtDescricao{
            padding:10px 70px;
        }
    }
</style>