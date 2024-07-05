import { BackgroundContent, BackgroundLayout } from "./background"
import programsBg from "@/public/programsbg.svg"
import { ProgramsLayout } from "./programlayout"
import { CardLayout } from "./cardlayout"
import { Program, ProgramsCard } from "./programscard"
import data from '@/app/components/data.json'
import Footer from "../components/molecules/footer"

export interface ProgramsLayoutProps {
    programs: Program[];
    definitionColor: string;
    definitionContent: string;
    definitionTitle: string;
    isSlider: boolean;
}

const programsData: ProgramsLayoutProps[] = [{
    programs: [
        {
            "name": "Tahfiz Class",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#907CFF",
            "btn": "Regular"
        },
        {
            "name": "Tuesday Programs",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#FBB400",
            "btn": "Weekly"
        },
        {
            "name": "Freshers Orientation",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#FF5A5F",
            "btn": "Adhoc"
        },
        {
            "name": "Madrasah",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#907CFF",
            "btn": "Regular"
        },
        // {
        //     "name": "Faculty Forum",
        //     "img": "/programs.svg",
        //     "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
        //     "color": "#FBB400",
        //     "btn": "Regular"
        // },
        // {
		// 	"name": "Tahfiz Class",
		// 	"img": "/programs.svg",
		// 	"desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
		// 	"color": "#907CFF",
		// 	"btn": "Regular"
		// },
		// {
		// 	"name": "Tuesday Programs",
		// 	"img": "/programs.svg",
		// 	"desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
		// 	"color": "#FBB400",
		// 	"btn": "Weekly"
		// },
		// {
		// 	"name": "Freshers Orientation",
		// 	"img": "/programs.svg",
		// 	"desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
		// 	"color": "#FF5A5F",
		// 	"btn": "Adhoc"
		// },
		// {
		// 	"name": "Madrasah",
		// 	"img": "/programs.svg",
		// 	"desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
		// 	"color": "#907CFF",
		// 	"btn": "Regular"
		// },
		// {
		// 	"name": "Faculty Forum",
		// 	"img": "/programs.svg",
		// 	"desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
		// 	"color": "#FBB400",
		// 	"btn": "Regular"
		// },
        // {
		// 	"name": "Tahfiz Class",
		// 	"img": "/programs.svg",
		// 	"desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
		// 	"color": "#907CFF",
		// 	"btn": "Regular"
		// },
		// {
		// 	"name": "Tuesday Programs",
		// 	"img": "/programs.svg",
		// 	"desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
		// 	"color": "#FBB400",
		// 	"btn": "Weekly"
		// },
		// {
		// 	"name": "Freshers Orientation",
		// 	"img": "/programs.svg",
		// 	"desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
		// 	"color": "#FF5A5F",
		// 	"btn": "Adhoc"
		// },
		// {
		// 	"name": "Madrasah",
		// 	"img": "/programs.svg",
		// 	"desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
		// 	"color": "#907CFF",
		// 	"btn": "Regular"
		// },
		// {
		// 	"name": "Faculty Forum",
		// 	"img": "/programs.svg",
		// 	"desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
		// 	"color": "#FBB400",
		// 	"btn": "Regular"
		// },
        // {
		// 	"name": "Tahfiz Class",
		// 	"img": "/programs.svg",
		// 	"desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
		// 	"color": "#907CFF",
		// 	"btn": "Regular"
		// },
		// {
		// 	"name": "Tuesday Programs",
		// 	"img": "/programs.svg",
		// 	"desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
		// 	"color": "#FBB400",
		// 	"btn": "Weekly"
		// },
		// {
		// 	"name": "Freshers Orientation",
		// 	"img": "/programs.svg",
		// 	"desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
		// 	"color": "#FF5A5F",
		// 	"btn": "Adhoc"
		// },
		// {
		// 	"name": "Madrasah",
		// 	"img": "/programs.svg",
		// 	"desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
		// 	"color": "#907CFF",
		// 	"btn": "Regular"
		// },
		// {
		// 	"name": "Faculty Forum",
		// 	"img": "/programs.svg",
		// 	"desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
		// 	"color": "#FBB400",
		// 	"btn": "Regular"
		// }
    ],
    definitionColor: '#4BC1F0',
    definitionContent: 'Explore our comprehensive range of programs, from regular and weekly sessions to special adhoc events, designed to enrich your journey with MSSN Unilag.',
    definitionTitle: 'Upcoming Programs',
    isSlider: true
},
{
    programs: [
        {
            "name": "Tahfiz Class",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#907CFF",
            "btn": "Regular"
        },
        {
            "name": "Tuesday Programs",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#FBB400",
            "btn": "Weekly"
        },
        {
            "name": "Freshers Orientation",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#FF5A5F",
            "btn": "Adhoc"
        },
        {
            "name": "Madrasah",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#907CFF",
            "btn": "Regular"
        },
        {
            "name": "Faculty Forum",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#FBB400",
            "btn": "Regular"
        }
    ],
    definitionColor: '#907CFF',
    definitionContent: 'Explore our comprehensive range of programs, from regular and weekly sessions to special adhoc events, designed to enrich your journey with MSSN Unilag.',
    definitionTitle: 'Regular Programs',
    isSlider: false
},
{
    programs: [
        {
            "name": "Tahfiz Class",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#907CFF",
            "btn": "Regular"
        },
        {
            "name": "Tuesday Programs",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#FBB400",
            "btn": "Weekly"
        },
        {
            "name": "Freshers Orientation",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#FF5A5F",
            "btn": "Adhoc"
        },
        {
            "name": "Madrasah",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#907CFF",
            "btn": "Regular"
        },
        {
            "name": "Faculty Forum",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#FBB400",
            "btn": "Regular"
        }
    ],
    definitionColor: '#FBB400',
    definitionContent: 'Explore our comprehensive range of programs, from regular and weekly sessions to special adhoc events, designed to enrich your journey with MSSN Unilag.',
    definitionTitle: 'Weekly Programs',
    isSlider: false
},
{
    programs: [
        {
            "name": "Tahfiz Class",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#907CFF",
            "btn": "Regular"
        },
        {
            "name": "Tuesday Programs",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#FBB400",
            "btn": "Weekly"
        },
        {
            "name": "Freshers Orientation",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#FF5A5F",
            "btn": "Adhoc"
        },
        {
            "name": "Madrasah",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#907CFF",
            "btn": "Regular"
        },
        {
            "name": "Faculty Forum",
            "img": "/programs.svg",
            "desc": "Short explanation of what the Madrasah entails, when it’s held and other necessary infomation",
            "color": "#FBB400",
            "btn": "Regular"
        }
    ],
    definitionColor: '#FF5A5F',
    definitionContent: 'Explore our comprehensive range of programs, from regular and weekly sessions to special adhoc events, designed to enrich your journey with MSSN Unilag.',
    definitionTitle: 'Ad-hoc Programs',
    isSlider: false
}]


export default function ProgramsPage () {
    const { programs } = data;
    return (
        <div className="bg-white">
            <ProgramsLayout>
                <BackgroundLayout image={programsBg}>
                    <BackgroundContent title="Programs" buttonContent="Learn More" />
                </BackgroundLayout>
                <div>
                    {programsData.map((layout, i) => (
                        <CardLayout key={i} isSlider={layout.isSlider} definitionColor={layout.definitionColor} definitionTitle={layout.definitionTitle} definitionContent={layout.definitionContent}>
                            {layout.isSlider && <div className="flex overflow-x-auto">
                                <div className="flex overflow-x-auto gap-4">
                                {layout.programs.map((program, i) => (
                                    <ProgramsCard key={i} program={program} />
                                ))}
                            </div>
                            </div>}
                            {!layout.isSlider &&
                                <div className="grid grid-cols-3 gap-4">
                                    {layout.programs.map((program, i) => (
                                        <ProgramsCard key={i} program={program} />
                                    ))}
                                </div>
                            }
                        </CardLayout>
                    ))}
                </div>
            </ProgramsLayout>
            <Footer />
        </div>
    )
}

