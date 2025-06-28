import { Outlet } from "react-router";
import ResponsiveNavBar from "@/components/Nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillBank } from "react-icons/ai";

export default function Dashboard() {
    return (
        <main className="w-full h-screen overflow-hidden flex flex-col">
            <ResponsiveNavBar />
            
            <div className="flex-1 flex h-full min-h-0">
                {/* Sidebar */}
                <div className="hidden lg:flex w-80 h-full flex-col pt-8 px-6 flex-shrink-0 border-r">
                    <Avatar className="size-32 mb-4">
                        <AvatarImage src="https://i.imgur.com/6Zem1Ew.png" />
                        <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    
                    <div className="w-full flex flex-col">
                        <div className="font-medium text-xl mb-6">
                            Abel-Semahegn
                        </div>
                        
                        <div className="flex flex-col space-y-3 w-full">
                            <div className="flex items-center space-x-3 text-sm">
                                <FaLocationDot className="w-4 h-4 flex-shrink-0" />
                                <span>Dallas, tx</span>
                            </div>
                            
                            <div className="flex items-center space-x-3 text-sm">
                                <AiFillBank className="w-4 h-4 flex-shrink-0" />
                                <span>UTD</span>
                            </div>
                            
                            <div className="flex items-center space-x-3 text-sm">
                                <FaGithub className="w-4 h-4 flex-shrink-0" />
                                <a 
                                    href="https://github.com/Abel-Semahegn" 
                                    className="hover:underline"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto h-full">
                    <div className="p-6 lg:p-8 max-w-full">
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    );
}