export default function ProjectsLayout({ children }) {
    return (
        <>
            <main className="max-w-screen-xl pt-14 pb-4 mx-auto flex flex-col items-center gap-2 mt-2 sm:mt-4 md:mt-6">
                <div className="text-3xl font-bold text-center sm:mb-2 lg:mb-4">
                    My Projects
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto sm:mb-2 lg:mb-4">
                    {children}
                </div>
                <div className="w-full flex items-center justify-center">
                    <a
                        href="/contact"
                        className="py-2 px-10 bg-transparent border border-primary text-primary hover:text-white hover:bg-primary  transition-all transform duration-300 font-medium text-lg"
                    >
                        Contact me
                    </a>
                </div>
            </main>
        </>
    );
}
