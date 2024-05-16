"use client"
import { Compass, Layout } from "lucide-react"
import SidebarItems from "./sidebar-item"

const guestRoutes = [{
    icon: Layout,
    label: "Dashboard",
    href: "/",
}, {
    icon: Compass,
    label: "Search",
    href: "/search",
},
]

const SidebarRoutes = () => {
    const routes = guestRoutes
    return (<div className="flex flex-col w-full">
        {routes.map((route) => (<SidebarItems key={route.href} icon={route.icon} label={route.label} href={route.href} />))}
    </div>);
}

export default SidebarRoutes;