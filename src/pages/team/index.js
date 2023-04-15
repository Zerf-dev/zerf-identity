import Bg from "@/components/general/bg";
import ButtonZerf from "@/components/general/buttonZerf";
import Header from "@/components/general/header";
import Head from "next/head";
import Image from "next/image";
import TestProfile from "@/assets/test_profile.jpg"

function UserCard({ firstname, image}){
  return (
    <div class="flex outline outline-1 outline-gray-600 p-2 rounded-2xl">
      <div class="flex flex-col space-y-2">
        <Image src={image} class="w-[250px] h-[250px] rounded-xl"/>
        <span class="text-xl font-bold">{firstname}</span>  
      </div>
    </div>
  );
}

export default function Home() {

  const testUsers = [{firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile},{firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile},{firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile},{firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile},{firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}, {firstname:"Test", image:TestProfile}]

  const users = testUsers;

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
                users.map(({firstname, image}) => (<UserCard firstname={firstname} image={image}/>))
              }
              </div>
            </div>
          </Bg>
        </form>
      </main>
    </>
  );
}
