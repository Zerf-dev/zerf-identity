import Head from "next/head";
import Header from "@/components/general/header";
import Frame from "@/components/general/frame";

export default function Home() {
  return (
    <>
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main class="min-h-screen flex flex-col w-full bg-gradient-to-b from-zerf-contrast via-black to-zerf text-white gap-4">
        <Header />
        <div class="flex flex-row p-16 space-x-20 w-full h-full">
          <div class="flex flex-col">
            <Frame>
              asdasddas
            </Frame>
          </div>

        </div>
      </main>
    </>
  );
}
