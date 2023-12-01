const Pagination = ({ page, lastPage, setPage }) => {

  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0
    });
  }

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  }

  const handlePrevPage = () => {
    setPage((currentState) => currentState - 1);
    scrollTop();
  }

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      <button style={{display: page === 1 ? "none" : "block"}} onClick={handlePrevPage} className="transition-all hover:text-color-accent">{'<<'}</button>
      <p>{page} of {lastPage}</p>
      <button style={{display: page === lastPage ? "none" : "block"}} onClick={handleNextPage} className="transition-all hover:text-color-accent">{'>>'}</button>
    </div>
  );
};

export default Pagination;