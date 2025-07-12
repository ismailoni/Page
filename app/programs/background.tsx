// import { url } from "inspector";

export interface BackgroundLayoutProps {
    image: string;
    children: React.ReactNode;
}


export const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({ image, children }) => {
    return (
        <div style={{ backgroundImage: image }} className="">
            {children}
        </div>
    )
}

export interface BackgroundContentProps {
    title: string;
    buttonContent: string;
}

export const BackgroundContent: React.FC<BackgroundContentProps> = ({ title, buttonContent }) => {
    return (
        <div className="flex flex-col justify-center">
            <h1>{title}</h1>
            <p>{buttonContent}</p>
        </div>
    )
}