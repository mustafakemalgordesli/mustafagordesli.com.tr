import Sidebar from '@/components/sidebar';
export default function Layout({ children }) {
    return (
        <div className="flex flex-row">
            <Sidebar />
            {children}
        </div>
    );
}
