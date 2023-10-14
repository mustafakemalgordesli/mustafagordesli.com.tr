export default function ProjectsLayout({ children }) {
    return (
        <>
            <main className="max-w-screen-xl py-14 mx-auto flex flex-col items-center gap-2 mt-2 sm:mt-4 md:mt-6">
                <div className="text-4xl font-bold text-center sm:mb-2 lg:mb-4">
                    Projects
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto">
                    {children}
                </div>
            </main>
        </>
    );
}
