import { useState } from 'react';
import CourseCard from "../components/courseCard";
import coursesArrayData from '../assets/courses Data';

export default function Courses() {
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 6;
    
    const totalPages = Math.ceil(coursesArrayData.length / coursesPerPage);

    const currentCourses = coursesArrayData.slice(
        (currentPage - 1) * coursesPerPage,
        currentPage * coursesPerPage
    );

    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;
        
        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            let start = Math.max(1, currentPage - 2);
            let end = Math.min(totalPages, start + maxVisible - 1);
            
            if (end === totalPages) {
                start = totalPages - maxVisible + 1;
            }
            
            for (let i = start; i <= end; i++) pages.push(i);
        }
        
        return pages;
    };
    
    const coursesCards = currentCourses.map((item) => (
        <CourseCard 
            key={item.id}
            {...item}
        />
    ));
    
    return (
        <div className="h-screen w-5/10 p-6 pb-10">
            <h1 className="text-4xl text-black font-bold text-center mb-8">Our Courses</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {coursesCards}
            </div>

            {(totalPages > 1) && (
                <div className="flex flex-col items-center gap-4">
                    <div className="text-gray-600">
                        Page {currentPage} of {totalPages} • 
                        Showing {((currentPage - 1) * coursesPerPage) + 1} - {Math.min(currentPage * coursesPerPage, coursesArrayData.length)} of {coursesArrayData.length} courses
                    </div>
                    
                    <div className="flex items-center gap-2 mb-[10px]">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-blue-800 rounded disabled:opacity-50"> Previous </button>

                        {getPageNumbers().map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 bg-[lightblue] rounded ${
                                currentPage === page ? 'bg-blue-900 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}> {page} </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-blue-800 rounded disabled:opacity-50"> Next </button>
                    </div>
                    
                </div>
            )}
        </div>
    );
}