'use client';

import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';

const staticProjects = [
    {
        id: 1,
        imageUrl: '/char-counter.png',
        title: 'Character Counter',
        content:
            'About This word and character counter plugin developed using Html Dom allows you to count characters or words up or down.',
        hastags: [
            {
                id: 4,
                title: 'Html5',
                published: true,
                projectId: 1,
            },
            {
                id: 5,
                title: 'Css3',
                published: true,
                projectId: 1,
            },
            {
                id: 6,
                title: 'JavaScript',
                published: true,
                projectId: 1,
            },
        ],
    },
    {
        id: 2,
        imageUrl: '/malware-header.jpg',
        title: 'Python Malware',
        content:
            'This project was developed for python training purposes and was prepared to examine how malware analysis can be done.',
        hastags: [
            {
                id: 1,
                title: 'Python',
                published: true,
                projectId: 2,
            },
            {
                id: 2,
                title: 'Keylogger',
                published: true,
                projectId: 2,
            },
            {
                id: 3,
                title: 'Sqlite',
                published: true,
                projectId: 2,
            },
        ],
    },
];

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
                    {staticProjects.map((element) => (
                        <ProjectCard project={element} key={element.id} />
                    ))}
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

const ProjectCard = ({ project }) => {
    return (
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg dark:shadow-none">
            <div className="h-[250px] w-full relative">
                <Image
                    className="w-full"
                    src={project.imageUrl}
                    alt="Sunset in the mountains"
                    fill={true}
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base dark:text-gray-200">
                    {project.content}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {project.hastags.map((element) => (
                    <span
                        key={element.id}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                        #{element.title}
                    </span>
                ))}
            </div>
        </div>
    );
};
