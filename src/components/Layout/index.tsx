import { Children, ReactNode } from "react";
import NavBar from "../Navbar";

interface LayoutProps {
    children?: ReactNode,
    navbar?: boolean,
}

export function Layout({ children, navbar }: LayoutProps) {
    return (
        <div className="min-h-screen w-screen overflow-y-auto">
            {navbar ? <NavBar /> : null}
            {children}
        </div>
    )
}