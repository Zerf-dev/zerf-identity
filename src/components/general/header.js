import ZerfbookTitle from "@/assets/zerfbook_title.png";
import Image from "next/image";

export default function Header({hideSections = false}) {
  return (
    <div class="flex flex-col w-full">
      <div class="flex flex-row w-full items-center py-6 px-20 justify-between">
        <Image src={ZerfbookTitle} class="my-auto" />
        {hideSections ? 
        null:
        (<div class="flex flex-row gap-10 text-white font-semibold">
          <div>Team</div>
          <div>Profile</div>
        </div>)
        }
      </div>
      <div class="w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </div>
  );
}
