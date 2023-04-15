import ZerfbookTitle from "@/assets/zerfbook_title.png";
import Bg from "@/components/general/bg";
import ButtonZerf from "@/components/general/buttonZerf";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';

import { login } from "@/services/loginService";
import Cookies from 'js-cookie'

function Field({ field, fieldname, placeholder, onChange}){
  return (
      <div class="flex flex-col space-y-1 w-full"> 
        <span class="text-sm ">{fieldname}</span>  
        <input id={field} onChange={onChange} type="text" class="outline outline-1 outline-gray-700 bg-transparent p-3 rounded-lg w-full" placeholder={placeholder}/>
      </div>
  );
}

export default function Home() {
  
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  const router = useRouter();

  const handleClick = async () => {
    // dispatch(loginActions.login({name, pass}))
    const user = await login({email: name, pass})
    console.log('user', user.data)
      Cookies.set('user', user.data.email);
      router.push('/team');
  }

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
              <Field field="email" fieldname="Email" placeholder="Ingresa tu email" onChange={(e) => setName(e.target.value)}/>
              <Field field="password" fieldname="Contraseña" placeholder="Ingresa tu contraseña" onChange={(e) => setPass(e.target.value)}/>
              <ButtonZerf onClick={handleClick}>Aceptar</ButtonZerf>
            </div>
          </Bg>
        </form>
      </main>
    </>
  );
}
