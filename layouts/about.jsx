import ViewResumeBtn from '@/components/buttons/ViewResumeBtn';
import Link from 'next/link';

export default function About() {
    return (
        <section
            id="about"
            className="max-w-screen-xl min-h-screen py-14 mx-auto flex flex-col items-center sm:justify-center gap-2 sm:my-0"
        >
            <div className="text-4xl font-bold text-center">
                About <span className="text-primary">ME</span>
            </div>
            <p className="text-gray-600 antialiased text-xl font-light max-w-xl tracking-wider leading-8 dark:text-slate-100 px-2">
                I am a fourth-year computer engineering student at Balıkesir
                University, driven by an investigative mindset and a strong
                commitment to continuous improvement. While I am still in the
                early stages of mastering the English language, I am dedicated
                to the learning process. My current focus lies in full stack web
                development, where I utilize technologies such as C#, .NET Core,
                JavaScript, Next.js and SQL Server. I predominantly craft my
                projects using the powerful combination of .NET and React.
            </p>
            <div className="gap-3 flex flex-col sm:flex-row">
                <ViewResumeBtn />
                <a
                    href="/mustafa-gordesli-cv.pdf"
                    download="mustafa-gordesli-cv"
                    className="py-2 px-10 bg-transparent border border-primary text-primary hover:text-white hover:bg-primary font-medium text-lg"
                >
                    Download CV
                </a>
            </div>
        </section>
    );
}
