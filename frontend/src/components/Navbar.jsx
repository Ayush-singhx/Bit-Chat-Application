import React from 'react'
import { useAuthStore } from '../store/useAuthStore.js'
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
    const { logout, authUser } = useAuthStore()
    return (
        <header className="bg-base-100 border-b border-base-300 w-full fixed top-0 z-40 backdrop-blur-lg bg-base-100/80"
        >
            <div className="container mx-auto px-4 h-16">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
                            <div className="size-9 rounded-lg  flex items-center justify-center">
                                {/* <MessageSquare className="w-5 h-5 text-primary" /> */}
                                <img src="/logo.png" alt="" />
                            </div>
                            <h1 className="text-lg font-bold">Bit-Chat</h1>
                        </Link>
                    </div>

                    <div className="flex items-center gap-2">
                        

                        {authUser && (
                            <>
                                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                                    <User className="size-5" />
                                    <span className="hidden sm:inline">Profile</span>
                                </Link>

                                <button className="flex gap-2 items-center" onClick={logout}>
                                    <LogOut className="size-5" />
                                    <span className="hidden sm:inline">Logout</span>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar