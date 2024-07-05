import { MemberCard, MemberCardProps } from "./membercard"
import image from "@/public/dosbranch.svg"
import { MembersText } from "./memberstext"

export const CurrentMembers: MemberCardProps[] = [{ name: "Yusuf Habeeb", course: "Systems Engineering", cgpa: 4.50, image: image, position: "Branch Exco, 2021" }, { name: "Yusuf Habeeb", course: "Systems Engineering", cgpa: 4.50, image: image, position: "Branch Exco, 2021" }, { name: "Yusuf Habeeb", course: "Systems Engineering", cgpa: 4.50, image: image, position: "Branch Exco, 2021" }, { name: "Yusuf Habeeb", course: "Systems Engineering", cgpa: 4.50, image: image, position: "Branch Exco, 2021" }, { name: "Yusuf Habeeb", course: "Systems Engineering", cgpa: 4.50, image: image, position: "Branch Exco, 2021" }, { name: "Yusuf Habeeb", course: "Systems Engineering", cgpa: 4.50, image: image, position: "Branch Exco, 2021" }, { name: "Yusuf Habeeb", course: "Systems Engineering", cgpa: 4.50, image: image, position: "Branch Exco, 2021" }, { name: "Yusuf Habeeb", course: "Systems Engineering", cgpa: 4.50, image: image, position: "Branch Exco, 2021" }, { name: "Yusuf Habeeb", course: "Systems Engineering", cgpa: 4.50, image: image, position: "Branch Exco, 2021" }, { name: "Yusuf Habeeb", course: "Systems Engineering", cgpa: 4.50, image: image, position: "Branch Exco, 2021" }]

export const PastMembers = () => {
    return (
        <div className="membersbg">
            <div>
                <MembersText />
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-12 m-12 justify-center">
                    {CurrentMembers.map((member, index) => (
                        <MemberCard key={index} name={member.name} course={member.course} cgpa={member.cgpa} image={member.image} position={member.position} />
                    ))}
                </div>
            </div>
        </div>
    )
}