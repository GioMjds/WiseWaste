'use client';

import Modal from "@/components/Modal";
import { logout } from "@/services/Auth";
import { motion } from "framer-motion";
import { Calendar, ClipboardList, Home, LogOut, MessageCircle, PieChart, User, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import logo from "../../public/logo.png";

interface MenuItem {
    label: string;
    href: string;
    icon: ReactNode;
}

interface SidebarProps {
    role: 'resident' | 'admin';
    userDetails: ReactNode;
}

const residentMenu: MenuItem[] = [
    { label: 'Dashboard', href: '/resident', icon: <Home size={20} /> },
    { label: 'Profile', href: '/resident/profile', icon: <User size={20} /> },
    { label: 'Request Pickup', href: '/resident/pickup', icon: <Calendar size={20} /> },
    { label: 'Waste Logs', href: '/resident/logs', icon: <ClipboardList size={20} /> },
    { label: 'Complaints', href: '/resident/complaints', icon: <MessageCircle size={20} /> },
];

const adminMenu: MenuItem[] = [
    { label: 'Dashboard', href: '/admin', icon: <PieChart size={20} /> },
    { label: 'Scheduling', href: '/admin/schedule', icon: <Calendar size={20} /> },
    { label: 'Routes', href: '/admin/routes', icon: <ClipboardList size={20} /> },
    { label: 'Analytics & Reports', href: '/admin/analytics', icon: <PieChart size={20} /> },
    { label: 'Complaints', href: '/admin/complaints', icon: <MessageCircle size={20} /> },
    { label: 'Manage Users', href: '/admin/users', icon: <Users size={20} /> },
];

export default function Sidebar({ role, userDetails }: SidebarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const menuItems = role === 'admin' ? adminMenu : residentMenu;
    const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleLogout = async () => {
        try {
            setLoading(true);
            await logout();
            router.push('/');
        } catch (error) {
            console.error(`Logout failed: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <aside className="fixed top-0 left-0 h-full w-64 bg-bg-secondary border-r border-border-primary shadow-lg z-10">
                <div className="h-16 border-b border-text-primary shadow-shadow-primary flex items-center justify-center bg-gradient-brand-diagonal">
                    <Image
                        src={logo}
                        alt="WiseWaste Logo"
                        width={40}
                        height={40}
                        className="rounded-full mr-2"
                        priority
                    />
                    <h1 className="text-3xl font-bold text-text-primary">WiseWaste</h1>
                </div>

                {userDetails}

                <nav className="mt-4 flex flex-col">
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

                    <div className="p-4 mb-6">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center w-full uppercase p-4 rounded-lg cursor-pointer text-text-primary hover:bg-button-danger hover:text-white transition-colors duration-200"
                            onClick={() => setShowLogoutModal(true)}
                        >
                            <LogOut size={20} className="mr-3" />
                            <span className="font-medium">Log Out</span>
                        </motion.button>
                    </div>
                </nav>
            </aside>
            <Modal
                isOpen={showLogoutModal}
                onCancel={() => setShowLogoutModal(false)}
                onConfirm={handleLogout}
                title="Confirm Logout"
                description="Are you sure you want to log out? You will be redirected to the login page."
                cancelText="Cancel"
                confirmText="Yes, Log Out"
                loading={loading}
                loadingText="Logging Out..."
                icon={<LogOut size={24} className="text-base-green-light" />}
            />
        </>
    );
}