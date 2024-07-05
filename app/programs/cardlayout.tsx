import { ProgramDefinition } from "./programdefinition";
import { ProgramSlider } from "./programslider";


export interface CardLayoutProps {
    children: React.ReactNode;
    isSlider: boolean;
    definitionColor: string;
    definitionTitle: string;
    definitionContent: string;
}


export const CardLayout: React.FC<CardLayoutProps> = ({ children, isSlider, definitionColor, definitionContent, definitionTitle }) => {
    return (
        <div>
            <ProgramDefinition color={definitionColor} content={definitionContent} title={definitionTitle} />
            {isSlider &&
                <div>
                    <ProgramSlider initialStep={1} isFinished={false} />
                    <div>{children}</div>
                </div>
            }
            {!isSlider &&
                <div>{children}</div>
            }
        </div>
    );
}