import ExperiencesTimeline from '@/components/experiences-timeline';
import EducationTimeline from '@/components/education-timeline';
import Link from 'next/link';

export default function Resume() {
    return (
        <main className="max-w-screen-xl py-14 mx-auto">
            <div className="flex flex-col md:flex-row py-5 md:py-10">
                <ExperiencesTimeline />
                <EducationTimeline />
            </div>
            <div className="w-full flex justify-center items-center">
                <Link
                    href="/projects"
                    className="py-2 px-10 bg-transparent border border-primary text-primary hover:text-white hover:bg-primary  transition-all transform duration-300 font-medium text-lg"
                >
                    View Projects
                </Link>
            </div>
        </main>
    );
}
