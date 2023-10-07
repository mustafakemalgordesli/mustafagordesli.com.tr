import Image from "next/image";

export default function Projects() {
  return (
    <main className="max-w-screen-xl py-14 mx-auto flex flex-col items-center gap-2 mt-2 sm:mt-4 md:mt-6">
      <div className="text-4xl font-bold text-center sm:mb-2">Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </main>
  );
}

const ProjectCard = () => {
  return (
    // <div className="bg-primary grid grid-cols-2  sm:grid-cols-1  md:grid-cols-2">
    //   <div className="w-[200px] h-[200px] sm:w-full sm:h-[300px] md:w-[200px] md:h-[200px] relative">
    //     <Image src="/news.jpeg" alt="news foto" fill={true} />
    //   </div>
    //   <div className="px-1">
    //     <h3>Python Malware</h3>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nemo?
    //       Consequatur ut neque atque voluptate, inventore corporis voluptas iste
    //       corrupti.
    //     </p>
    //   </div>
    // </div>

    <div class="max-w-sm mx-auto rounded overflow-hidden shadow-lg dark:shadow-none border border-white">
      <div className="h-[250px] w-full relative">
        <Image
          class="w-full"
          src="/news.jpeg"
          alt="Sunset in the mountains"
          fill={true}
        />
      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};
