import Page from "../../componets/page"
import Form from "./form"
import Head from "next/head"



export default function Cadastro_admin(){


    return(
    <>
    <Head>
    <link rel="icon" href="/Logo.png" />
    </Head>
    <Page title="Conheça Nosso Sistema ERP Web com PDV, Gestão Multilojas, Financeiro, Orçamentos, Estoque, Notas Fiscais e Cadastro de Produtos"
     description=" Se você está procurando um sistema ERP Web completo que possa ajudá-lo a gerenciar seu negócio de forma eficiente, então você está no lugar certo! Nosso sistema ERP Web oferece uma ampla gama de funcionalidades para atender às suas necessidades empresariais. Com recursos como PDV, Gestão Multilojas, Financeiro, Orçamentos, Estoque, Notas Fiscais e Cadastro de Produtos, nosso sistema ERP Web é a solução completa que você precisa para o seu negócio.">
        <Form/>
      
    </Page>
    
    
   
    </>

    ) 
}