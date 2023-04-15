
export default function Bg({ children }){
  return (
    <div class="h-full flex flex-col justify-center items-center w-full bg-gradient-to-b from-zerf-contrast via-black to-zerf/50 text-white gap-4">
      { children }
    </div>
  );
  }
