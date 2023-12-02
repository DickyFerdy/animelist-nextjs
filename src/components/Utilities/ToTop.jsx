import { ArrowCircleUp } from "@phosphor-icons/react";

const ToTop = () => {

  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0
    });
  }
  
  const handleToTop = () => {
    scrollTop();
  }

  return (
    <button onClick={handleToTop} className="right-5 bottom-5 fixed">
      <ArrowCircleUp size={64} className="text-color-primary opacity-50" />
    </button>
  );
};

export default ToTop;