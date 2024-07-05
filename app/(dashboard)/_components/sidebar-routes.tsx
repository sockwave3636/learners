"use client"
import { BarChart, Compass, Layout, List } from "lucide-react"
import SidebarItems from "./sidebar-item"
import { usePathname } from "next/navigation";

const guestRoutes = [{
    icon: Layout,
    label: "Dashboard",
    href: "/",
}, {
    icon: Compass,
    label: "Search",
    href: "/search",
},
];
const teacherRoutes = [ {
    icon:List,
    label:"Courses",
    href: "/teacher/cources"
},
{
    icon:BarChart,
    label:"Analytics",
    href:"/teacher/analytics"
}]

const SidebarRoutes = () => {
    const pathname = usePathname();
    const isTeacherpage = pathname?.includes("/teacher");
    const routes = isTeacherpage? teacherRoutes :guestRoutes;
    return (<div className="flex flex-col w-full">
        {routes.map((route) => (<SidebarItems key={route.href} icon={route.icon} label={route.label} href={route.href} />))}
    </div>);
}

export default SidebarRoutes;