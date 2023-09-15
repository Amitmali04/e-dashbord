import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



// MainContent

export function MainContent({ children }) {
    return (
        <div className="py-2 md:px-6 sm:ml-64">
            {children}
        </div>
    )
}

// Main Header

export function CustomNavbarHeader({pageName}) {
    return (
        <nav className="mb-3 -mx-2 shadow-navbar md:-mx-4 bg-main-bg dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-2 lg:px-5 lg:pl-3">
                <div className="flex flex-wrap items-center justify-between mx-auto ">
                    <div className="flex items-center justify-start">
                        <button onClick={
                            () => {

                                const target = document.getElementById("logo-sidebar");
                                const targetMain = document.getElementById("MainContent");
                                if (target && targetMain) {
                                    if (targetMain.classList.contains("sm:ml-64")) {

                                        // target.style.display="none";
                                        target.classList.add("sm:hidden");
                                        targetMain.classList.remove("sm:ml-64");
                                    } else {
                                        // target.style.display="block";
                                        target.classList.remove("sm:hidden");
                                        targetMain.classList.add("sm:ml-64");
                                        targetMain.classList.add("translate-x-0");
                                    }

                                    // Check if the class exists
                                    if (target.classList.contains("-translate-x-full")) {
                                        // console.log("Found class -- removing it");
                                        target.classList.remove("-translate-x-full")

                                    } else {
                                        // console.log("unable to find class -- adding it");
                                        target.classList.add("-translate-x-full")

                                    }


                                }
                            }
                        } data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>

                        <a href="" className="flex items-center ml-2 md:mr-24">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" /> */}

                        <span className="self-center text-[28px] font-semibold whitespace-nowrap text-primary-text">{pageName}</span>
                    </a>

                    </div>

                    <div className="hidden w-full mx-4 grow md:block md:w-auto" id="navbar-default">
                        {/* <NavbarResponsiveFeatures searchFunction={props.searchFunction} /> */}
                        <NavbarResponsiveFeatures />
                    </div>
                </div>
            </div>
        </nav>
    )
}


export function NavbarResponsiveFeatures() {
    const [showHideClass, setShowHideClass] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            setShowHideClass(false)
        };
    }, [])

    return (
        <ul className="flex flex-wrap justify-between p-4 mt-4 font-medium border rounded-lg md:justify-normal md:items-center md:p-0 md:flex-row-reverse md:space-x-8 md:mt-0 md:border-0 ">

            <li className='mb-3 cursor-pointer md:mb-0 md:ml-3'
                onClick={() => {
                    console.log("here");   // Only Dev
                    // authLogOut()
                    setShowHideClass(!showHideClass)
                }}
            >
                <div data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="flex items-center space-x-4">
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-[#FFE0B2] rounded-full dark:bg-gray-600">
                        {/* <span className="font-medium text-gray-600 dark:text-gray-300">{getInitials(authUser.name)}</span> */}
                        <span className="font-medium text-gray-600 dark:text-gray-300"></span>
                    </div>
                    <div className="font-medium dark:text-white">
                        {/* <div>{authUser.name}</div> */}
                        {/* <div className="text-sm text-gray-500 dark:text-gray-400">{toTitleCase(authUser.role ?? "")}</div> */}

                        <div className="text-sm text-gray-500 dark:text-gray-400"></div>
                    </div>
                </div>

                <div id="userDropdown"
                    className={showHideClass ? "z-10 show bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 class-2" :
                        "z-10 show bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 class-1 hidden"}>
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>Jese Leos</div>
                        <div className="font-medium truncate">name@email.com</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                        <li>

                            <a href="#"
                                onClick={() => {
                                    navigate("/user/change-password")
                                }}
                                className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg> Change password</a>
                        </li>
                        <li>
                            {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a> */}
                        </li>

                    </ul>
                    <div className="py-1">
                        <a href="#"
                            onClick={() => {
                                // authLogOut()
                            }}
                            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                            </svg>
                            Log out</a>
                    </div>
                </div>
            </li>

            <li className='mb-3 md:mb-0'>
                <button type="button" className="relative inline-flex items-center p-2 mb-2 mr-2 text-sm font-medium text-center rounded-lg text-navbar-text hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    {/* <FaRegBell className="w-8 h-8" /> */}
                    <span className="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white border-2 border-white rounded-full bg-[#E10000] top-1 right-1 dark:border-gray-900"></div>
                </button>
            </li>
            <li className='mb-3 md:mb-0 '>
                <div className=''>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-3 pl-10 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search..."
                            required
                        // onChange={(event) => props.searchFunction(event.target.value)}
                        />

                    </div>
                </div>

            </li>
        </ul>
    )

}


