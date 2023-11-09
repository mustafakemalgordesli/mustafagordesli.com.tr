'use client';

import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';

export default function ProjectList() {
    const [isLoading, SetLoading] = useState(false);

    return (
        <>
            {isLoading ? (
                <>
                    <ProjectCardLoading />
                    <ProjectCardLoading />
                    <ProjectCardLoading />
                </>
            ) : (
                <>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </>
            )}
        </>
    );
}

const ProjectCardLoading = () => {
    return (
        <div className="w-[380px] h-[475px] mx-auto rounded overflow-hidden shadow-lg dark:shadow-none">
            <Skeleton className="h-[250px] w-full mb-4" />

            <div className="flex flex-col px-6 pt-2 pb-4">
                <Skeleton className="mb-4 h-6 w-40 rounded" />
                <Skeleton className="h-20 w-[300px] rounded" />
            </div>

            <div className="flex flex-row mt-auto px-6 pt-2 gap-2 w-full">
                <Skeleton className="rounded-full h-7 w-20" />
                <Skeleton className="rounded-full h-7 w-20" />
                <Skeleton className="rounded-full h-7 w-20" />
            </div>
        </div>
    );
};

const ProjectCard = () => {
    return (
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg dark:shadow-none">
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
