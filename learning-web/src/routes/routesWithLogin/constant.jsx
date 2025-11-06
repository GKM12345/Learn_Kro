import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";

export const routeData = [
    {
        id: 1,
        name: 'Dashboard',
        url: '/home/dashboard',
        componentName: 'Dashboard',
        navName: 'Home',
        icon: <FaHome />,
    },
    {
        id: 2,
        name: 'Courses',
        url: '/courses/index',
        componentName: 'CoursesIndex',
        navName: 'Courses',
        icon: <MdCategory />,
    },
    {
        id: 3,
        name: 'CoursesModule',
        url: '/courses/module',
        componentName: 'CoursesModule',
    },
    {
        id: 6,
        name: 'Profile',
        url: '/profile/index',
        componentName: 'ProfileIndex',
        navName: 'Profile',
        icon: <CgProfile />,
    },
    {
        id: 7,
        name: 'Setting',
        url: '/setting/index',
        componentName: 'SettingIndex',
        navName: 'Setting',
        icon: <IoSettingsSharp />,
    },
    {
        id: 8,
        name: 'Logout',
        navName: 'Logout',
        icon: <MdOutlineLogout />
      }
]

export const lowerNavBarList = ['Profile', 'Setting', 'Logout'];
export const AppNavBarList = ['Dashboard', 'Courses', 'Setting', 'Profile'];
