import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router";


const Navbar = () => {

    const { pathname } = useLocation()
    const [toggle, setToggle] = useState(false)

    const navgicaton = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "About",
            path: "/about",
        },
        {
            id: 3,
            name: "Contect",
            path: "/contect",
        },
    ]

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <div>
                <nav className={`z-50 w-full lg:px-20 px-3 flex justify-between py-3 font-roboto font-[200]`}>
                    <div className='flex items-center gap-20'>
                        <h1 className='text-3xl'>
                            <h1>AduAchieve</h1>
                        </h1>
                        <ul className='hidden lg:flex items-center gap-5 text-[16px] font-[400]'>
                            {
                                navgicaton.map((navi) => (
                                    <Link className={`${pathname == navi.path && "text-[#307bc4] border-b-2 border-[#307bc4]"} hover:text-[#307bc4]`} key={navi.id} to={navi.path}>
                                        <li className='font-rubik'>{navi.name}</li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='flex items-center gap-5 text-[19px]'>
                        <button className="btn">Login</button>
                        <FaBars onClick={handleToggle} className='lg:hidden' />
                    </div>
                    <ul className={`z-50 absolute left-0 p-5 lg:hidden  bg-[#307bc4] text-white w-full flex flex-col  gap-5 text-[19px] font-[300] translate-y-14 duration-300  ${toggle ? "translate-x-0" : "-translate-x-full"}`}>
                        {
                            navgicaton.map((navi) => (
                                <Link className={`${pathname == navi.path && "text-white border-b-2 border-[#000000]"} hover:text-[#307bc4]`} key={navi.id} to={navi.path}>
                                    <li className='font-rubik'>{navi.name}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;