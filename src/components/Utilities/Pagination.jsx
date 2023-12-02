import { CaretDoubleLeft, CaretDoubleRight, CaretLeft, CaretRight } from "@phosphor-icons/react";

const Pagination = ({ page, lastPage, setPage }) => {

  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0
    });
  }

  const handleFirstPage = () => {
    setPage((page) => page = 1);
    scrollTop();
  }

  const handleNextPage = () => {
    setPage((currentState) => currentState + 1);
    scrollTop();
  }

  const handlePrevPage = () => {
    setPage((currentState) => currentState - 1);
    scrollTop();
  }

  const handleLastPage = () => {
    setPage((page) => page = lastPage);
    scrollTop();
  }

  const prevPage = { display: page === 1 ? "none" : "block" }
  const nextPage = { display: page === lastPage ? "none" : "block" }

  return (
    <div className="flex justify-center items-center py-4 gap-1 text-color-primary">
      <button style={ prevPage } onClick={handleFirstPage} className="hover:scale-90 transition-all">
        <CaretDoubleLeft size={24} className=" hover:text-color-accent"/>
      </button>
      <button style={ prevPage } onClick={handlePrevPage} className="hover:scale-90 transition-all">
        <CaretLeft size={24} className=" hover:text-color-accent"/>
      </button>
      <p className="text-xl">{page} of {lastPage}</p>
      <button style={ nextPage } onClick={handleNextPage} className="hover:scale-90 transition-all hover:text-color-accent">
        <CaretRight size={24} className="hover:text-color-accent"/>
      </button>
      <button style={ nextPage } onClick={handleLastPage} className="hover:scale-90 transition-all hover:text-color-accent">
        <CaretDoubleRight size={24} className="hover:text-color-accent"/>
      </button>
    </div>
  );
};

export default Pagination;