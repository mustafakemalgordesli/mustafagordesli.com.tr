import ExperiencesTimeline from '@/components/experiences-timeline';
import EducationTimeline from '@/components/education-timeline';
import Link from 'next/link';
import ViewProjectsBtn from '@/components/buttons/ViewProjectsBtn';

export default function Resume() {
    return (
        <section
            id="resume"
            className="max-w-screen-xl min-h-screen flex flex-col items-center py-14 mx-auto"
        >
            <div className="text-4xl font-bold text-center mt-auto">
                <span className="text-primary">Resume</span>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-around py-5 md:py-10">
                <ExperiencesTimeline />
                <EducationTimeline />
            </div>
            <div className="w-full flex justify-center items-center mb-auto">
                <ViewProjectsBtn />
            </div>
        </section>
    );
}
