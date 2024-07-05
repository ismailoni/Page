export interface ProgramDefinitionProps {
    color: string;
    title: string;
    content: string;
}



export const ProgramDefinition = (props: ProgramDefinitionProps) => {
    const processContent = (text: string, maxLength: number) => {
        return text.split(' ').map(word => {
          if (word.length > maxLength) {
            const parts = [];
            for (let i = 0; i < word.length; i += maxLength) {
              parts.push(word.slice(i, i + maxLength));
            }
            return parts.join('\u200B'); // Zero-width space to break the word
          }
          return word;
        }).join(' ');
      };
    
      const processedContent = processContent(props.content, 13);
    return (
        <div className="m-8">
            <div className="flex gap-4 mb-2">
                <div style={{ backgroundColor: props.color }} className="border h-10 w-5"></div>
                <h1 className="text-2xl font-semibold text-center mt-1">{props.title}</h1>
            </div>
            <p className="text-gray-500 text-sm break-words">{processedContent}</p>
        </div>
    );
}