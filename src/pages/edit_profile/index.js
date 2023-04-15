import Head from "next/head";
import Header from "@/components/general/header";
import Frame from "@/components/general/frame";
import TestProfile from "@/assets/test_profile.jpg"
import Image from "next/image";
import Bg from "@/components/general/bg";
import { useEffect, useState } from "react";
import Options from "@/components/general/options";
import ButtonZerf from "@/components/general/buttonZerf";
import ButtonGray from "@/components/general/buttonGray";
import { useRouter } from "next/router";

function Field({ field, fieldname, placeholder}){
  return (
      <div class="flex flex-col space-y-1 w-full"> 
        <span class="text-sm ">{fieldname}</span>  
        <textarea id={field} class="outline resize-none outline-1 outline-gray-700 bg-transparent p-3 rounded-lg w-full" placeholder={placeholder}/>
      </div>
  );
}

function SelectorField({ field, fieldname, placeholder, options}){
  return (
      <div class="flex flex-col space-y-1 w-full"> 
        <span class="text-sm ">{fieldname}</span>  
        <select id={field} class=" bg-transparent w-full outline outline-1 outline-gray-700 p-3 rounded-lg border-0" placeholder={placeholder}>
          <Options list={options} />
        </select>
      </div>
  );
}

function CheckField({ field, fieldname }){
  return (
      <div class="flex flex-row space-x-5 w-full h-fit items-center">
        <input type={"checkbox"} class="h-5 w-5 accent-violet-600 bg-gray-600"></input>
        <span class="text-base ">{fieldname}</span>
      </div>
  );
}

function CheckFields({ fieldname, options}){
  return (
      <div class="flex flex-col space-y-4 w-full"> 
        <span class="text-sm ">{fieldname}</span>  
        <div class="grid grid-cols-2 gap-y-8 px-4">
          {options.map(option => (<CheckField field={option.toLowerCase} fieldname={option}/>))}
        </div>
      </div>
  );
}

function StepIndex({ number, selectedStep, children }){

  const isSelected = selectedStep? selectedStep == number : false;

  return (
    <div class="flex flex-row space-x-3 w-1/3">
      <div class={"flex rounded-full h-8 w-8 justify-center items-center"+ (isSelected? " bg-gradient-to-t to-violet-500 from-violet-700 " : " bg-gray-600 ")}>
        <span>{number}</span>
      </div>
      <div class="">
        {children}
      </div>
    </div>
  );

}

function Step1({ isSelected=false, setStep }){
return(
  <div class={(isSelected? " flex ": " hidden ") + "flex-col space-y-4 h-full"}>
    <div class="flex flex-col space-y-4 h-5/6">
      <SelectorField field="rol" fieldname="Rol" placeholder={"Selecciona tu rol"} 
      options={["Designer", "Product Owner", "QA", "Project Manager", "Developer", "CEO", "CTO", "COO" ]}/>
      <CheckFields fieldname="Proyectos" options={["Adelphi", "Prior", "Boutique Homes", "Ubuntu", "Devi", "YU", "Licita360", "Papa Jhon's"]}/>
    </div>
    <div class="flex flex-row justify-end">
      <ButtonZerf onClick={() => setStep(2)}>Siguiente</ButtonZerf>
    </div>
  </div>
);
}

function Step2({ isSelected=false, setStep }){
  return(
    <div class={(isSelected? " flex ": " hidden ") + "flex-col space-y-4 h-full"}>
      <div class="flex flex-col space-y-4 h-5/6">
        <SelectorField field="eyes" fieldname="Color de ojos" placeholder={"Selecciona tu color de ojos"} 
        options={["Marrones", "Negros", "Verdes", "Azules", "Gris", "Avellana"]}/>
        <SelectorField field="hair" fieldname="Color de pelo" placeholder={"Selecciona tu color de pelo"} 
        options={["Castaño claro", "Castaño oscuro", "Castaño", "Morocho", "Rubio", "Platinado"]}/>
      </div>
      <div class="flex flex-row justify-end space-x-4">
        <ButtonGray onClick={() => setStep(1)}>Atras</ButtonGray>
        <ButtonZerf onClick={() => setStep(3)}>Siguiente</ButtonZerf>
      </div>
    </div>
  );
  }

  function Step3({ isSelected=false, setStep }){
    return(
      <div class={(isSelected? " flex ": " hidden ") + "flex-col space-y-4 h-full"}>
        <div class="flex flex-col space-y-4 h-5/6">
        <Field field="hobbie" fieldname="Tu hobbie" placeholder={"Contanos tu hobbie favorito"}/>
        <Field field="food" fieldname="Comida favorita" placeholder={"Contanos tu comida favorita"}/>
        </div>
        <div class="flex flex-row justify-end space-x-4">
          <ButtonGray onClick={() => setStep(2)}>Atras</ButtonGray>
          <ButtonZerf onClick={() => setStep(3)}>Submit</ButtonZerf>
        </div>
      </div>
    );
    }


export default function Home() {

  const testUser = {
    image: TestProfile,
    firstname:"Maximiliano",
    lastname:"Kallenbach",
    rol:"Dev",
    projects: ["Adelphi", "Prior"],
    food: "Milanesa Napo",
    hobbie: "Videojuegos",
    hair: "Marron",
    eyes: "Marron"
  }

  const {query} = useRouter();

  const [step, setStep] = useState(parseInt(query.step) || 1);

  useEffect(() => {
    setStep(query.step)
  }, [query])

  const user = testUser;
  
  return (
    <>
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main class="bg-black h-screen">
        <Bg>
          <Header hideSections={true}/>
          <div class="w-full h-full">
            <div class="flex flex-col py-5 px-28 space-y-6 w-2/3 h-full">
              <span class="text-3xl h-16">Completa tus datos para generar tu Zerfito</span>
              <div class="flex flex-row">
                <StepIndex number={1} selectedStep={step}>Tu rol en Zerf</StepIndex>
                <StepIndex number={2} selectedStep={step}>Tus looks</StepIndex>
                <StepIndex number={3} selectedStep={step}>Tu vida</StepIndex>
              </div>
              <form class="h-full">
                <Step1 isSelected={step==1} setStep={setStep}/>
                <Step2 isSelected={step==2} setStep={setStep}/>
                <Step3 isSelected={step==3} setStep={setStep}/>
              </form>
            </div>
          </div>
        </Bg>
      </main>
    </>
  );
}
