import React from 'react';


interface SidebarProps {
    // setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

export const BlogNavbar: React.FC<SidebarProps> = ({ 
    // setSelectedTab
 }) => {
    const tabs = ['All', 'Fiqh', 'Aqeedah', 'Hadith', 'Shariah', 'Family & Life', 'Seerah', 'Quran'];
    // const handleTabClick = (tab: string) => {
    //     setSelectedTab(tab);
    // };

    return (
        <div>
            <div style={{ backgroundColor: '#F4FCFB' }} className='flex flex-row space-x-6 overflow-x-auto p-2'>
                {tabs.map(tab => (
                    <div
                        key={tab}
                        // style={{ backgroundColor: '', hove}}
                        className='py-3 rounded-2xl  px-6 flex items-center cursor-pointer transition duration-300 border-gray-400 text-black hover:bg-green-700 hover:border hover:text-white'
                        // onClick={() => handleTabClick(tab)}
                    >
                        <span className="whitespace-nowrap">{tab}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
