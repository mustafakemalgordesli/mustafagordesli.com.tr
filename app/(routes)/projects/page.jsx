import Image from 'next/image';

export default async function Projects() {
    return (
        <>
            <ProjectCard />
            <ProjectCard />
        </>
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

        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg dark:shadow-none border border-white">
            <div className="h-[250px] w-full relative">
                <Image
                    className="w-full"
                    src="/news.jpeg"
                    alt="Sunset in the mountains"
                    fill={true}
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base dark:text-gray-200">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                </span>
            </div>
        </div>
    );
};
