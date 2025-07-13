import Image from "next/image"
import { Tag } from "./tag"



export interface OrgansCardProps {
  name: string
  content: string
  tag: string
}

export const OrgansCard = ({ name, content, tag }: OrgansCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300">
      <div className="p-6">
        <h1 className="font-semibold mb-2 text-left">{name}</h1>
        <p className="text-gray-500 text-left text-sm">{content}</p>
        <div className="mt-4">
          <Tag color="black" tag={tag} />
        </div>
      </div>
    </div>
  )
}