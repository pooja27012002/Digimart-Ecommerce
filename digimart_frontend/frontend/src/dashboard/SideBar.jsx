import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiTable, HiViewBoards } from "react-icons/hi";
import { FaBagShopping } from "react-icons/fa6";
import userImg from '../assets/react.svg';
import { Link } from "react-router-dom";

export const SideBar = () => {
    return (
        <Sidebar aria-label="Sidebar with content separator example" className="bg-gray-400">
            <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
                <FaBagShopping className="inline-block" />
                <h3 className="font-bold text-2xl">
                    Digi<span className="text-white">Mart</span>
                </h3>
            </Link>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="text-white">
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className="text-white">
                        Upload Product
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="text-white">
                        Manage Products
                    </Sidebar.Item>
                    <Sidebar.Item href="/login" icon={HiArrowSmRight} className="text-white">
                        Sign In
                    </Sidebar.Item>
                    <Link to="/login">
                        <Sidebar.Item href="/logout" icon={HiTable} className="text-white">
                            Logout
                        </Sidebar.Item>
                    </Link>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/contact" icon={HiViewBoards} className="text-white">
                        Contact
                    </Sidebar.Item>
                    <Sidebar.Item href="/aboutus" icon={HiViewBoards} className="text-white">
                        About Us
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={BiBuoy} className="text-white">
                        Help
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};
