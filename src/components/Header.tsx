import logo from "../assets/img/logo-d-plus.svg";
import 'boxicons';
import {
    HiHome,
    HiStar, HiPlayCircle,
    HiTv,
    HiMagnifyingGlass
} from "react-icons/hi2";

import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { IconType } from "react-icons";
import { useState } from "react";

interface MenuItem {
    name?: string;
    icon?: React.ReactElement<IconType>;
}


const Header = () => {

    const menu: MenuItem[] = [
        {
            name: "HOME",
            icon: <HiHome />
        },
        {
            name: "SEARCH",
            icon: <HiMagnifyingGlass />
        },
        {
            name: "WATCH LIST ",
            icon: <HiPlus />
        },
        {
            name: "ORIGINALS",
            icon: <HiStar />
        },
        {
            name: "MOVIES",
            icon: <HiPlayCircle />
        },
        {
            name: "SERIES",
            icon: <HiTv />
        }

    ]

   const [toggle,setToggle] = useState(false);

   
    return (
        <div className='flex items-center justify-between p-3  md:p-5'>
            <div className="flex items-center gap-6 md:gap-12">
                <img src={logo} className="w-[50px] sm:w-[60px] cursor-pointer" />
                <div className="hidden md:flex  items-center gap-6 md:gap-12 ">
                    {menu.map((item, index) => (
                        <HeaderItem key={index} name={item.name} icon={item.icon}  />
                    ))}
                </div>
                <div className="flex md:hidden items-center gap-6 md:gap-5 ">
                    {menu.map((item, index) => index < 3 && ((
                        <HeaderItem key={index} name='' icon={item.icon} />
                    )))}
                </div>
                <div className="md:hidden items-center ">
                    <HeaderItem name='' icon={<HiDotsVertical onClick={() => setToggle(!toggle) } />} />
                    {toggle ? (
                         <div className="absolute mt-3 bg-[#121212] border-gray-800 border-[1px]  px-6">
                         {menu.map((item, index) => index > 2 && ((
                             <HeaderItem key={index} name={item.name} icon={item.icon} margin={'4'} />
                         )))}
                     </div>
                    ): null }
                   
                </div>

            </div>
            <div className="cursor-pointer">
                <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                    className='w-[40px] rounded-full' />
            </div>

        </div>
    )
}

export default Header;
export type { MenuItem };
