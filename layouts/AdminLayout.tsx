import React, { useState, useEffect } from 'react';
import AdminDashboard from '../pages/admin/Dashboard';
import CustomerManagement from '../pages/admin/Customers';
import PlanManagement from '../pages/admin/Plans';

const Logo = () => (
    <div className="p-4 text-center">
        <a href="#/admin/dashboard" className="text-2xl font-bold tracking-tight text-white">
            <span style={{color: '#34A853'}}>G</span>
            <span style={{color: '#FBBC05'}}>A</span>
            <span style={{color: '#FF6D00'}}>P</span>
            <span style={{color: '#EA4335'}}>P</span>
            <span style={{color: '#4285F4'}}>CHAT</span>
            <span className="ml-2 text-sm font-medium text-gray-300">Admin</span>
        </a>
    </div>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode; currentPath: string; icon: React.ReactNode; }> = ({ href, children, currentPath, icon }) => {
    const isActive = currentPath === href;
    return (
        <a href={href} className={`flex items-center px-4 py-3 mx-2 my-1 rounded-lg transition-colors duration-200 ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}>
            <span className="mr-3">{icon}</span>
            {children}
        </a>
    );
};

interface AdminLayoutProps {
    onLogout: () => void;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ onLogout }) => {
    const [path, setPath] = useState(window.location.hash);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleHashChange = () => setPath(window.location.hash);
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const renderPage = () => {
        if (path.includes('/admin/customers')) return <CustomerManagement />;
        if (path.includes('/admin/plans')) return <PlanManagement />;
        return <AdminDashboard />; // Default page
    };

    const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
    const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
    const PackageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
    const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
    const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;


    const sidebarContent = (
         <div className="flex flex-col h-full">
            <Logo />
            <nav className="flex-1 mt-6">
                <NavLink href="#/admin/dashboard" currentPath={path} icon={<DashboardIcon />} >Dashboard</NavLink>
                <NavLink href="#/admin/customers" currentPath={path} icon={<UsersIcon />}>Clientes</NavLink>
                <NavLink href="#/admin/plans" currentPath={path} icon={<PackageIcon />}>Planos</NavLink>
            </nav>
            <div>
                <button onClick={onLogout} className="flex items-center w-full px-4 py-3 mx-2 my-1 text-gray-300 hover:bg-red-700/50 hover:text-white rounded-lg transition-colors duration-200">
                    <span className="mr-3"><LogoutIcon /></span>
                    Sair (Logout)
                </button>
            </div>
        </div>
    );

    return (
        <div className="flex min-h-screen admin-gradient font-poppins">
            {/* Desktop Sidebar */}
            <aside className="w-64 bg-gray-800 text-white hidden lg:flex flex-col flex-shrink-0">
                {sidebarContent}
            </aside>
            
            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-30 transition-opacity bg-black opacity-50 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={() => setSidebarOpen(false)}></div>
            <aside className={`fixed top-0 left-0 z-40 w-64 h-full bg-gray-800 text-white transform lg:hidden transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
               {sidebarContent}
            </aside>

            <main className="flex-1 flex flex-col">
                 {/* Top bar for mobile */}
                <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b">
                    <button onClick={() => setSidebarOpen(true)} className="text-gray-600">
                        <MenuIcon />
                    </button>
                    <span className="font-bold text-lg">GAPPCHAT Admin</span>
                </header>
                <div className="flex-1 p-6 sm:p-8 lg:p-10">
                    {renderPage()}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;