import ExperiencesTimeline from '@/components/experiences-timeline';
import EducationTimeline from '@/components/education-timeline';

export default function Resume() {
    return (
        <main className="max-w-screen-xl py-14 mx-auto">
            <div className="flex flex-col md:flex-row py-5 md:py-10">
                <ExperiencesTimeline />
                <EducationTimeline />
            </div>
        </main>
    );
}
