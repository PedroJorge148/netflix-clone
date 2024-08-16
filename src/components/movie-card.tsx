import { Play } from "lucide-react";
import Image from "next/image";

const imgUrl = "https://occ-0-3851-3852.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWtu7X43WvqQuyqBB82FYH-Wi-KzyW5zfDsoJa0o527RFiNmfzFKLC4t6eYqGBED3HvfDlKFw_ndBnU_JFAeQxwgFB7r8f_yp1Dt-WXsl0t9loA--7lUgjKo_abcxkZN9gR0gD3v4RVxzT2u_IH376yn0CGin-3e-1VXHVy35R4RknG9mTpgDi6vkGeKHSum_4ct809BayCkYSVq24cno9vGPHoeMvDHd-hZiBImOb7isPiNDb1AJ7OSy7K_d-HnBqc5OGyDc9bOppDsKt6as4j99zghn7SUb1TGxFNGvoatuwDaB_DSSxnawaqWswMNM3i99blq3BLdmR_Trr6IQwG-AjiReTkkSp5h_ww5QJk.jpg?r=ea0"

export function MovieCard() {
  return (
    <div className="group bg-zinc-900 col-span-1 relative h-[12vh]">
      <img
        src={imgUrl}
        alt="Thumb"
        className="cursor-pointer object-cover transition-all duration-500 shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300"
      />
      <div className="opacity-0 absolute top-0 transition-all duration-500 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vh] group-hover:translate-x-[2vh] group-hover:opacity-100">
        <img
          src={imgUrl}
          alt="Thumb"
          className="cursor-pointer object-cover transition-all duration-500 shadow-xl rounded-t-md"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full h-auto transition-all shadow-md rounded-b-md">
          <div className="flex items-center gap-3">
            <div className="cursor-pointer size-6 lg:size-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300 ">
              <Play className="size-6 fill-black" />
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2023</span>
          </p>

          <div className="flex mt-4 gap-3 items-center">
            <p className="text-white text-xs lg:text-sm">10 min</p>
          </div>
          <div className="flex mt-4 gap-3 items-center">
            <p className="text-white text-xs lg:text-sm">Comedy</p>
          </div>
        </div>
      </div>
    </div>
  )
}