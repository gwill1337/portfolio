"use client";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../hooks/useTheme"
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useEffect, useState } from "react";

const btn = "px-3 py-1 hover:bg-black/15 dark:hover:bg-white/15 transition rounded border border-black/20 dark:border-white/20 cursor-pointer h-9 flex items-center";

const navLinks = [
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export function Header() {
    const { theme, toggleTheme } = useTheme();

    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.replace("#", "");
            const element = document.getElementById(targetId);

            if (element) {
                const isMobile = window.innerWidth < 768;
                const isTall = element.clientHeight > window.innerHeight * 0.8;

                if (isMobile || isTall) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                } else {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                    });
                }

                window.history.pushState(null, "", href)
            }
        }
    };

    return (
        <header className="py-1 sticky top-0 z-50 w-full bg-background/40 backdrop-blur-md shadow-md">
            <div className="flex items-center py-1">
                <h1 className="font-heading font-semibold dark:text-white  text-black text-xl sm:text-3xl px-2">
                    Gwill1337 <span className="text-primary"> Portfolio </span>
                </h1>
                <div className="absolute right-3 flex items-center gap-2">
                    <nav className="hidden md:flex items-center gap-1 ml-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="px-3 py-1.5 rounded text-sm font-medium text-foreground hover:text-primary hover:bg-black/10 dark:hover:bg-white/10 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <a
                        className={`${btn} hidden md:flex text-foreground hover:text-primary`}
                        href="https://github.com/gwill1337"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiGithub size={20} />
                    </a>
                    <button
                        className="px-3 py-1 hover:bg-black/15 dark:hover:bg-white/15 transition rounded border border-black/20 dark:border-white/20 cursor-pointer h-9 flex items-center" onClick={toggleTheme} >
                        {mounted ? (
                            theme === "dark" ? <Sun color="yellow" /> : <Moon color="darkblue" />
                        ) : (
                            <div className="w-6 h-6" />
                        )}
                    </button>
                    <button
                        className={`${btn} md:hidden`}
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Menu"
                        aria-expanded={open}
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {open && (
                <>
                    <div className="fixed inset-0 -z-10 md:hidden" onClick={() => setOpen(false)} />
                    <nav className="md:hidden absolute right-3 top-full mt-2 w-44 rounded-xl border border-border bg-card/90 backdrop-blur-md shadow-lg p-2">
                        <nav className="flex flex-col items-start gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => {
                                        setOpen(false);
                                        handleScroll(e, link.href);
                                    }}
                                    className="w-full px-3 py-1.5 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-black/10 dark:hover:bg-white/10 transition"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <a
                            href="https://github.com/gwill1337"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 px-3 py-1.5 rounded-lg text-foreground hover:text-primary hover:bg-black/10 dark:hover:bg-white/10 transition"
                        >
                            <span className="text-sm font-medium">GitHub</span>
                            <SiGithub size={20} />
                        </a>
                    </nav>
                </>
            )}
        </header>
    )
}