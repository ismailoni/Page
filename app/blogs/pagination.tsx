import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export interface BlogPaginationProps {
    currentPage: number;
    totalPages: number;
    // onPageChange: any;
}

export const BlogPagination: React.FC<BlogPaginationProps> = (data) => {
    // const handleClick = (page: number) => {
    //     if (page >= 1 && page <= data.totalPages) {

    //     }
    // };
    const pageNumbers = Array.from({ length: data.totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center items-center mt-4 overflow-x-auto mb-12">
            <nav>
                <ul className="pagination flex flex-row gap-x-4">
                    <li className={`page-item ${data.currentPage === 1 ? 'disabled' : ''}`}>
                        <div className="page-link flex rounded-full cursor-pointer hover:bg-customGreen w-8 h-8 hover:text-white"
                        //  onClick={() => handleClick(data.currentPage - 1)}
                        >
                            <BsArrowLeft className="ml-2 mt-2" />
                        </div>
                    </li>
                    {pageNumbers.map((page) => (
                        <li key={page} className={`page-item ${data.currentPage === page ? 'active' : ''}`}>
                            <div className="page-link">
                                <div className="border-2 cursor-pointer text-gray-500 font-semibold border-gray-200 rounded-xl w-10 h-10 flex justify-center items-center hover:bg-customGreen hover:text-white">{page}</div>
                            </div>
                        </li>
                    ))}
                    <li className={`page-item ${data.currentPage === data.totalPages ? 'disabled' : ''}`}>
                        <div className="page-link rounded-full text-gray-500 font-semibold flex justify-center w-8 h-8 cursor-pointer hover:bg-customGreen hover:text-white"
                        //  onClick={() => handleClick(data.currentPage + 1)}
                        >
                            <BsArrowRight className="mt-2" />
                        </div>
                    </li>
                </ul>
            </nav>
        </div>

    );
};


