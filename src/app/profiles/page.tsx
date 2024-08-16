import Image from "next/image";

export default function ProfilesPage() {
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">Who is watching?</h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div>
            <div className="group flex-row w-44 mx-auto">
              <div className="w-44 h-44 rounded-md flex items-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <Image src="/avatar.png" alt="Profile" width={176} height={176} />
              </div>
              <div className="mt-4 text-gray-200 text-2xl text-center group-hover:text-white">
                Name
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}