import Page from "../../componets/page"
import LoginBox from "./login"
import Head from "next/head"



export default function login(){

    return(
    <>
    <Head>
    <link rel="icon" 
    href="/Logo.png" />
    </Head>
    <Page title="Login - Market ERP"
     description="">
    <LoginBox/>

       
    </Page>
    
    
   
    </>

    ) 
}