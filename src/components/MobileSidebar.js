// Navbar retirada da "https://flowbite.com/docs/components/bottom-navigation/"
// Apenas customizei ela para aquilo que eu precisava

export default function MobileSidebar() {
    return (
        <div className="fixed bottom-0 left-0 z-50 h-16 w-full">
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-300">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                    <a href="/" className="inline-flex h-full w-full flex-col items-center justify-center px-2 hover:bg-neutral-secondary-medium group">
                        <svg className="w-6 h-6 mb-1 text-[#49444b] group-hover:text-[#49444b]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" /></svg>
                        <span className="text-sm text-black">Inicio</span>
                    </a>
                    <a href="/doar" className="inline-flex h-full w-full flex-col items-center justify-center px-2 hover:bg-neutral-secondary-medium group">
                        <svg className="w-6 h-6 mb-1 text-[#49444b] group-hover:text-[#49444b]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a7 7 0 0 0 7-7c0-3.5-7-11-7-11S5 10.5 5 14a7 7 0 0 0 7 7Z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8.2 13.5c.1 1.5.7 2.7 1.8 3.5"/></svg>
                        <span className="text-sm text-black">Doar</span>
                    </a>
                    <a href="/locais" className="inline-flex h-full w-full flex-col items-center justify-center px-2 hover:bg-neutral-secondary-medium group">
                        <svg className="w-6 h-6 text-[#49444b] group-hover:text-[#49444b]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5.8.938a7 7 0 1 0-11.464.144l.14.171q.15.19.3.371L12 21l5.13-6.248q.291-.314.54-.659Z"/></svg>
                        <span className="text-sm text-black">Locais</span>
                    </a>
                    <a href="/comunidade" className="inline-flex h-full w-full flex-col items-center justify-center px-2 hover:bg-neutral-secondary-medium group">
                        <svg className="w-6 h-6 text-[#49444b] group-hover:text-[#49444b]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" /></svg>
                        <span className="text-sm text-black">Comunidade</span>
                    </a>
                    <a href="/perfil" className="inline-flex h-full w-full flex-col items-center justify-center px-2 hover:bg-neutral-secondary-medium group">
                        <svg className="w-6 h-6 mb-1 text-[#49444b] group-hover:text-[#49444b]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                        <span className="text-sm text-black">Perfil</span>
                    </a>
                </div>
            </div>
        </div>
    );
}