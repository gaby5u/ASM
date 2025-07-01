import { useState, useEffect, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import ProjectCard from "./cards/ProjectCard";
import { useNavigate } from "react-router";

const itemsPerPage = 9;

const Paginate = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const topRef = useRef(null);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projectsCol = collection(db, "projects");
        const projectsSnapshot = await getDocs(projectsCol);
        const projectsData = projectsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCards(projectsData);
      } catch (err) {
        console.error(err);
      }
      finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [cards, totalPages, currentPage]);

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

  if (loading) return <p>Loading news...</p>;

  return (
    <div className="mx-auto">
      <div className="relative py-2 w-full overflow-x-hidden overflow-y-visible">
        <div
          ref={topRef}
          key={currentPage}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-1 auto-rows-min
              transition-all duration-500 ease-in-out ${pageTransition}`}
        >
          {selectedCards.map((card) => (
            <ProjectCard
              key={card.id}
              title={card.title}
              icon={card.image}
              onClick={() => navigate(`/proiecte/${card.id}`)}
            />
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
              onClick={() => {
                setCurrentPage(page);
                  topRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
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
