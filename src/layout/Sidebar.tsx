'use client';

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Calendar, ClipboardList, User, Users, PieChart, MessageCircle, LogOut } from "lucide-react";
import Image from "next/image";
import { logout } from "@/services/Auth";
import logo from "../../public/logo.png";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";

interface MenuItem {
    label: string;
    href: string;
    icon: ReactNode;
}

interface SidebarProps {
    role: 'resident' | 'admin';
}

const residentMenu: MenuItem[] = [
    { label: 'Dashboard', href: '/', icon: <Home size={20} /> },
    { label: 'Profile', href: '/profile', icon: <User size={20} /> },
    { label: 'Request Pickup', href: '/request/new', icon: <Calendar size={20} /> },
    { label: 'Waste Logs', href: '/logs', icon: <ClipboardList size={20} /> },
    { label: 'Complaints', href: '/complaints', icon: <MessageCircle size={20} /> },
];

const adminMenu: MenuItem[] = [
    { label: 'Dashboard', href: '/admin', icon: <PieChart size={20} /> },
    { label: 'Schedule', href: '/admin/schedule', icon: <Calendar size={20} /> },
    { label: 'Routes', href: '/admin/routes', icon: <ClipboardList size={20} /> },
    { label: 'Analytics', href: '/admin/analytics', icon: <PieChart size={20} /> },
    { label: 'Complaints', href: '/admin/complaints', icon: <MessageCircle size={20} /> },
    { label: 'Users', href: '/admin/users', icon: <Users size={20} /> },
];

export default function Sidebar({ role }: SidebarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const menuItems = role === 'admin' ? adminMenu : residentMenu;
    const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);

    const handleLogout = async () => {
        try {
            await logout();
            router.push('/');
        } catch (error) {
            console.error(`Logout failed: ${error}`);
        }
    };

    return (
        <>
            <motion.aside
                initial={{ x: -250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 h-full w-64 bg-bg-secondary border-r border-border-primary shadow-lg z-10"
            >
                <div className="h-16 border-b border-text-primary shadow-shadow-primary flex items-center justify-center bg-gradient-brand-diagonal">
                    <Image
                        src={logo}
                        alt="WiseWaste Logo"
                        width={40}
                        height={40}
                        className="rounded-full mr-2"
                        priority
                    />
                    <h1 className="text-2xl font-bold text-text-primary">WiseWaste</h1>
                </div>
                <nav className="mt-6 flex flex-col h-[calc(100%-4rem)]">
                    <div className="">
                        {menuItems.map((item) => {
                            const active = pathname === item.href;
                            return (
                                <Link key={item.href} href={item.href}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex items-center px-4 py-3 mx-2 my-1 rounded-lg cursor-pointer transition-colors duration-200
                                        ${active ? 'bg-base-green-light text-text-on-dark' : 'text-text-primary hover:bg-bg-button-hover'}`}
                                    >
                                        <span className="mr-3">{item.icon}</span>
                                        <span className="font-medium">{item.label}</span>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-auto mb-6">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center w-full p-4 rounded-lg cursor-pointer text-text-primary hover:bg-bg-button-hover border-t-2 border-text-primary transition-colors duration-200"
                            onClick={() => setShowLogoutModal(true)}
                        >
                            <LogOut size={20} className="mr-3" />
                            <span className="font-medium">Log Out</span>
                        </motion.button>
                    </div>
                </nav>
            </motion.aside>
            <Modal
                isOpen={showLogoutModal}
                onCancel={() => setShowLogoutModal(false)}
                onConfirm={handleLogout}
                title="Confirm Logout"
                description="Are you sure you want to log out? You will be redirected to the login page."
                cancelText="Cancel"
                confirmText="Yes, Log Out"
                loading={false}
                icon={<LogOut size={24} className="text-base-green-light" />}
            />
        </>
    );
}