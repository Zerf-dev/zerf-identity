import Bg from "@/components/general/bg";
import ButtonZerf from "@/components/general/buttonZerf";
import Header from "@/components/general/header";
import Head from "next/head";
import Image from "next/image";
import TestProfile from "@/assets/test_profile.jpg"
import { useEffect, useState } from "react";
import { getAvatars, regenerateAvatar } from "@/services/loginService";

function UserCard({ firstname, email, image, onRegenerateAvatar, loading }){
  return (
    <div class="relative">
    {loading && <div class="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto">Regenerating...</div>}
    <div onClick={() => onRegenerateAvatar(email)} class="flex outline outline-1 outline-gray-600 p-2 rounded-2xl cursor-pointer">
      <div class="flex flex-col space-y-2">
        <img src={image} class="rounded-xl"/>
        <span class="text-xl font-bold">{firstname}</span>  
      </div>
    </div>
    </div>
  );
}

export default function Home() {

  const [avatars, setAvatars] = useState([])
  const [loading, setLoading] = useState('')

  const testUsers = [{firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile},{firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile},{firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile},{firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile},{firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}]

  const users = testUsers;

  useEffect(() => {
    async function fetchData() {
      const response = await getAvatars();
      setAvatars(response.data);
    }
    fetchData();
  }, []);

  async function handleRegen(email) {
    setLoading(email)
    await regenerateAvatar(email)
    setLoading('')
    // window.location.reload(true)
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
            <Header/>
            <div class="h-full flex flex-col space-y-8 items-center rounded-2xl w-full overflow-x-scroll">
              <div class="w-full flex flex-row justify-center pt-4">
                <span class="text-2xl font-bold">Meet the team</span>
              </div>
              <div class="grid grid-cols-4 gap-4 pb-4">
              {
                avatars.map(({name, avatar, email}) => (<UserCard firstname={name} email={email} image={avatar} onRegenerateAvatar={handleRegen} loading={loading === email}/>))
              }
              </div>
            </div>
          </Bg>
        </form>
      </main>
    </>
  );
}
