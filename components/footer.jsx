import Link from 'next/link';

export default function Footer() {
    return (
        <div className="w-full h-14 flex items-center justify-center font-semibold border-t">
            Created by
            <Link
                className="underline text-black dark:text-white ml-1"
                href="https://github.com/mustafakemalgordesli/mustafagordesli.com.tr"
                target="_blank"
            >
                @mustafakemalgordesli
            </Link>
        </div>
    );
}
