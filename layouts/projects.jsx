import ContactMeBtn from '@/components/buttons/ContactMeBtn';
import ProjectList from '@/components/project-list';
import Link from 'next/link';

export default function Projects() {
    return (
        <>
            <section
                id="projects"
                className="max-w-screen-xl pt-14 pb-4 min-h-screen mx-auto flex flex-col items-center gap-2 mt-2 sm:mt-4 md:mt-6"
            >
                <div className="text-3xl font-bold text-center sm:mb-2 lg:mb-4 mt-auto">
                    My Projects
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto sm:mb-2 lg:mb-4">
                    <ProjectList />
                </div>
                <div className="w-full flex items-center justify-center mb-auto">
                    <ContactMeBtn />
                </div>
            </section>
        </>
    );
}
