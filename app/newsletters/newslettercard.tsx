export interface Newsletter {
    title: string;
    date: string;
    content: string;
    link: string;
  };
  

export interface NewsletterCardProps {
  newsletter: Newsletter;
};

export const NewsletterCard: React.FC<NewsletterCardProps> = ({ newsletter }) => {
  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">{newsletter.title}</h2>
      <p className="text-gray-400 mb-4">{newsletter.date}</p>
      <p className="mb-4">{newsletter.content}</p>
      <a href={newsletter.link} className="text-green-400 hover:underline">Read More →</a>
    </div>
  );
};

