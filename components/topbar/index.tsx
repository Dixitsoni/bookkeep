// app/page.tsx (Next.js 13+ with App Router)
// or pages/index.tsx if using Pages Router

import { FC } from "react";
import { Phone } from "lucide-react";
import Link from "next/link";
import TopBar from "./topcontact/TopContact";
import TopNav from "./topnav/TopNav";

const Header: FC = () => {
    return (
        <header className="shadow-2xl w-full z-10">
            <TopBar />
            <nav className="w-full bg-white">
                <TopNav />
            </nav>
        </header>
    );
};

export default Header;
