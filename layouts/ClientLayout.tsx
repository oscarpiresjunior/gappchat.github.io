import React, { useState, useEffect } from 'react';
import MyAgents from '../pages/client/MyAgents';
import Conversations from '../pages/client/Conversations';

const Logo = () => (
    <div className="p-4 text-center">
        <a href="#/client/agents" className="text-2xl font-bold tracking-tight text-white">
            <span style={{color: '#34A853'}}>G</span>
            <span style={{color: '#FBBC05'}}>A</span>
            <span style={{color: '#FF6D00'}}>P</span>
            <span style={{color: '#EA4335'}}>P</span>
            <span style={{color: '#4285F4'}}>CHAT</span>
        </a>
    </div>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode; currentPath: string; icon: React.ReactNode; }> = ({ href, children, currentPath, icon }) => {
    const isActive = currentPath.startsWith(href);
    return (
        <a href={href} className={`flex items-center px-4 py-3 mx-2 my-1 rounded-lg transition-colors duration-200 ${isActive ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700/50 hover:text-white'}`}>
            <span className="mr-3">{icon}</span>
            {children}
        </a>
    );
};

interface ClientLayoutProps {
    onLogout: () => void;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ onLogout }) => {
    const [path, setPath] = useState(window.location.hash);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleHashChange = () => setPath(window.location.hash);
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const renderPage = () => {
        if (path.includes('/client/conversations')) return <Conversations />;
        return <MyAgents />; // Default page
    };

    const BotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"></path><rect x="4" y="8" width="16" height="12" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>;
    const MessageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
    const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
    const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;

    const sidebarContent = (
        <div className="flex flex-col h-full">
           <Logo />
           <nav className="flex-1 mt-6">
               <NavLink href="#/client/agents" currentPath={path} icon={<BotIcon />}>Meus Agentes</NavLink>
               <NavLink href="#/client/conversations" currentPath={path} icon={<MessageIcon />}>Conversas</NavLink>
           </nav>
           <div>
               <button onClick={onLogout} className="flex items-center w-full px-4 py-3 mx-2 my-1 text-blue-100 hover:bg-red-600 hover:text-white rounded-lg transition-colors duration-200">
                   <span className="mr-3"><LogoutIcon /></span>
                   Sair (Logout)
               </button>
           </div>
       </div>
   );


    return (
        <div className="flex min-h-screen bg-gray-50 font-poppins">
            {/* Desktop Sidebar */}
            <aside className="w-64 bg-blue-600 text-white hidden lg:flex flex-col flex-shrink-0">
                {sidebarContent}
            </aside>
            
            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-30 transition-opacity bg-black opacity-50 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={() => setSidebarOpen(false)}></div>
            <aside className={`fixed top-0 left-0 z-40 w-64 h-full bg-blue-600 text-white transform lg:hidden transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
               {sidebarContent}
            </aside>

            <main className="flex-1 flex flex-col">
                 <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b">
                    <button onClick={() => setSidebarOpen(true)} className="text-gray-600">
                        <MenuIcon />
                    </button>
                    <span className="font-bold text-lg text-blue-600">GAPPCHAT</span>
                </header>
                <div className="flex-1 p-4 sm:p-6 lg:p-10">
                    {renderPage()}
                </div>
            </main>
        </div>
    );
};

export default ClientLayout;
