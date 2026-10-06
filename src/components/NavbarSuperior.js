// Navbar retirada da "https://flowbite.com/docs/components/navbar/"
// Apenas customizei ela para aquilo que eu precisava

export default function NavbarSuperior() {
    return (
        <nav className="bg-neutral-primary w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse"><img src="/logo.png" className="h-15" alt="Logo" /></a>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href="#" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-[#95848b] bg-white px-5 transition-colors hover:bg-gray-50">
                        <svg className="h-5 w-5 text-[#49444b]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c.45 3.05 1.35 5.25 2.75 6.65C16.15 10.05 17.95 10.85 21 12c-3.05 1.15-4.85 1.95-6.25 3.35C13.35 16.75 12.45 18.95 12 22c-.45-3.05-1.35-5.25-2.75-6.65C7.85 13.95 6.05 13.15 3 12c3.05-1.15 4.85-1.95 6.25-3.35C10.65 8.05 11.55 5.05 12 2Z" /> <path d="M19 2c.2 1.25.55 2.15 1.1 2.7.55.55 1.45.9 2.7 1.1-1.25.2-2.15.55-2.7 1.1-.55.55-.9 1.45-1.1 2.7-.2-1.25-.55-2.15-1.1-2.7-.55-.55-1.45-.9-2.7-1.1 1.25-.2 2.15-.55 2.7-1.1.55-.55.9-1.45 1.1-2.7Z" /></svg>
                        <span className="text-lg font-semibold text-black">Tire dúvidas</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}