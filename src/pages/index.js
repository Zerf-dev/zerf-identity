import ZerfbookTitle from "@/assets/zerfbook_title.png";
import Bg from "@/components/general/bg";
import ButtonZerf from "@/components/general/buttonZerf";
import Head from "next/head";
import Image from "next/image";

function Field({ field, fieldname, placeholder}){
  return (
      <div class="flex flex-col space-y-1 w-full"> 
        <span class="text-sm ">{fieldname}</span>  
        <input id={field} type="text" class="outline outline-1 outline-gray-700 bg-transparent p-3 rounded-lg w-full" placeholder={placeholder}/>
      </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Zerfbook</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main class="bg-black h-screen">
        <form class="h-full">
          <Bg>
            <div class="flex flex-col space-y-8 items-center outline outline-1 rounded-2xl outline-gray-700 p-8 bg-gradient-to-t from-violet-900/5 to-violet-900/30 w-1/2">
              <Image src={ZerfbookTitle}/>
              <Field field="email" fieldname="Email" placeholder="Ingresa tu email"/>
              <Field field="password" fieldname="Contraseña" placeholder="Ingresa tu contraseña"/>
              <ButtonZerf>Aceptar</ButtonZerf>
            </div>
          </Bg>
        </form>
      </main>
    </>
  );
}
