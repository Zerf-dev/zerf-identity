import Bg from "@/components/general/bg";
import ButtonZerf from "@/components/general/buttonZerf";
import Header from "@/components/general/header";
import Head from "next/head";
import Image from "next/image";
import TestProfile from "@/assets/test_profile.jpg"
import { useEffect, useState } from "react";
import { getAvatars } from "@/services/loginService";

function UserCard({ firstname, image}){
  return (
    <div class="flex outline outline-1 outline-gray-600 p-2 rounded-2xl">
      <div class="flex flex-col space-y-2">
        <img src={image} class="rounded-xl"/>
        <span class="text-xl font-bold">{firstname}</span>  
      </div>
    </div>
  );
}

export default function Home() {

  const [avatars, setAvatars] = useState([])

  const testUsers = [{firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile},{firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile},{firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile},{firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile},{firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}]

  const users = testUsers;

  useEffect(() => {
    async function fetchData() {
      const response = await getAvatars();
      setAvatars(response.data);
    }
    fetchData();
  }, []);

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
            <Header/>
            <div class="h-full flex flex-col space-y-8 items-center rounded-2xl w-full overflow-x-scroll">
              <div class="w-full flex flex-row justify-center pt-4">
                <span class="text-2xl font-bold">Meet the team</span>
              </div>
              <div class="grid grid-cols-4 gap-4 pb-4">
              {
                avatars.map(({name, avatar}) => (<UserCard firstname={name} image={avatar}/>))
              }
              </div>
            </div>
          </Bg>
        </form>
      </main>
    </>
  );
}
