import {useState, useEffect } from "react";
import ProjectCard from "./cards/ProjectCard";

const itemsPerPage = 12;

const initialCards = Array.from({ length: 235 }, (_, i) => ({
  id: i + 1,
  title: `Act 4 vote ${i + 1}`,
}));

const Paginate = () => {
  const [cards, setCards] = useState(initialCards);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handleAddCard = () => {
    const newCard = {
      id: Date.now(),
      title: `Act 4 vote ${cards.length + 1}`,
    };

    setCards([newCard, ...cards]);
    setCurrentPage(0);
  };

  const startIndex = currentPage * itemsPerPage;
  const selectedCards = cards.slice(startIndex, startIndex + itemsPerPage);

  const getPaginationNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible + 2) {
      for (let i = 0; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      const first = 0;
      const last = totalPages - 1;

      pages.push(first);

      const left = Math.max(currentPage - 1, 1);
      const right = Math.min(currentPage + 1, totalPages - 2);

      if (left > 1) {
        pages.push("left-ellipsis");
      }

      for (let i = left; i <= right; i++) {
        pages.push(i);
      }

      if (right < totalPages - 2) {
        pages.push("right-ellipsis");
      }

      pages.push(last);
    }

    return pages;
  };

  const [pageTransition, setPageTransition] = useState(
    "opacity-0 translate-x-4"
  );

  useEffect(() => {
    setPageTransition("opacity-0 translate-x-4");
    const timeout = setTimeout(() => {
      setPageTransition("opacity-100 translate-x-0");
    }, 50);
    return () => clearTimeout(timeout);
  }, [currentPage]);

  return (
    <div className="mx-auto">
      <div className="relative py-2 w-full overflow-x-hidden overflow-y-visible">
        <div
          key={currentPage}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full px-1 auto-rows-min
              transition-all duration-500 ease-in-out ${pageTransition}`}
        >
          {selectedCards.map((card) => (
            <ProjectCard key={card.id} title={card.title} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 flex-wrap py-2 sm:py-12">
        {getPaginationNumbers().map((page) =>
          typeof page === "string" ? (
            <span key={page} className="px-2 text-gray-500 select-none">
              ...
            </span>
          ) : (
            <button
              key={`page-${page}`}
              onClick={() => setCurrentPage(page)}
              className={`rounded-full font-bold py-2 px-4 sm:py-3 sm:px-5 ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-transparent border text-blue-500 transition-all duration-200 hover:bg-[#dbe6ff]"
              }`}
            >
              {page + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Paginate;
