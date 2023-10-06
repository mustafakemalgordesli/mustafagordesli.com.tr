export default function Resume() {
  return (
    <main className="max-w-screen-xl py-14 mx-auto">
      <div className="flex flex-col md:flex-row py-10">
        <div className="w-full sm:w-1/2 flex flex-col mx-auto md:mx-0 md:items-start md:justify-start md:pr-2">
          <h2 className="font-medium text-2xl mb-2">EXPERIENCES</h2>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-6 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                July 2023 - Aug 2023 | 1 month
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Trair Software Technology Investments
              </h3>
              <h5 class="font-medium text-base text-gray-700 dark:text-gray-300">
                Software Engineer Intern
              </h5>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li class="ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Jun 2022 - Aug 2022 | 2 month
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                VBT Yazılım A.Ş
              </h3>
              <h5 class="font-medium text-base text-gray-700 dark:text-gray-300">
                Software Engineer Intern
              </h5>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
          </ol>
        </div>
        <div className="w-full sm:w-1/2 bg-red-500"></div>
      </div>
    </main>
  );
}
