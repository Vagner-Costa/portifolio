<template>
    <section class="container">
        <TagAbertura 
            linha="51"
            tag="footer"
            tituloClass="containerRodape"
            identacao = "0"
            :left="store.getters.gettersIdentacao"
        ></TagAbertura>

            <section class="box_informacoes">

                    <TagAbertura 
                        linha="52"
                        tag="p"
                        tituloClass="txtInfo"
                        tituloId="txtInfo"
                        identacao = "1"
                        :left="store.getters.gettersIdentacao"
                    ></TagAbertura>

                            <p class="txtDescricao verde">
                                &lt; !--
                                ATENÇÃO! O conteúdo de programação descrito nessa página não
                                necessariamente corresponde ao código original do sistema. 
                                Código meramente ilustrativo.
                                --&gt;
                            </p> 

                    <TagFechamento 
                        tag="p" 
                        linha="53" 
                        identacao = "1"
                        :left="store.getters.gettersIdentacao"
                        visualizar=""
                    ></TagFechamento>

            </section>

        <TagFechamento 
            tag="footer" 
            linha="54" 
            identacao = "0"
            :left="store.getters.gettersIdentacao"
            visualizar=""
        ></TagFechamento>
    </section>
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
    .box_informacoes{
        width:100%;
    }
    .txtDescricao{
        width:100%;
        text-align:justify;
        padding:10px 150px;
    }
    @media screen and (min-width:0px) and (max-width:600px){
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