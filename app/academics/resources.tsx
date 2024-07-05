import { ResourceCard, ResourceCardProps } from "./resourcecard"
import { ResourceText } from "./resourcetext"


const resourcesData: ResourceCardProps[] = [{ title: "100 Level Materials", content: "We have curated resources to aid your academic surgeon on campus. Check the files via the link below via the link below", tags: [{ tag: 'Freshers', color: '#4BC1F0' }] }, { title: "200 Level Materials", content: "We have curated resources to aid your academic surgeon on campus. Check the files via the link below via the link below", tags: [{ tag: 'Sophomores', color: '#4BC1F0' }] }, { title: "300 Level Materials", content: "We have curated resources to aid your academic surgeon on campus. Check the files via the link below via the link below", tags: [{ tag: 'Juniors', color: '#4BC1F0' }] }, { title: "400 Level Materials", content: "We have curated resources to aid your academic surgeon on campus. Check the files via the link below via the link below", tags: [{ tag: 'Seniors', color: '#4BC1F0' }] }, { title: "500 Level Materials", content: "We have curated resources to aid your academic surgeon on campus. Check the files via the link below via the link below", tags: [{ tag: 'Finalists', color: '#4BC1F0' }] }, { title: "Postgraduate Materials", content: "We have curated resources to aid your academic surgeon on campus. Check the files via the link below via the link below", tags: [{ tag: 'Postgraduates', color: '#4BC1F0' }] }, { title: "General Resources", content: "We have curated resources to aid your academic surgeon on campus. Check the files via the link below via the link below", tags: [{ tag: 'All Levels', color: '#4BC1F0' }] }, { title: "Past Questions", content: "We have curated resources to aid your academic surgeon on campus. Check the files via the link below via the link below", tags: [{ tag: 'All Levels', color: '#4BC1F0' }] }, { title: "Past Questions", content: "We have curated resources to aid your academic surgeon on campus. Check the files via the link below via the link below", tags: [{ tag: 'All Levels', color: '#4BC1F0' }] }, { title: "Past Questions", content: "We have curated resources to aid your academic surgeon on campus. Check the files via the link below via the link below", tags: [{ tag: 'All Levels', color: '#4BC1F0' }] }]


export const AllResources = () => {
    return (
        <div>
            <div className="bg-white pt-8">
                <div className="mt-6">
                    <ResourceText />
                </div>
                <div className="grid grid-cols-3 gap-8 m-16">
                    {resourcesData.map((resource, i) => (
                        <ResourceCard key={i} title={resource.title} content={resource.content} tags={resource.tags} />
                    ))}
                </div>
            </div>
        </div>
    )
}