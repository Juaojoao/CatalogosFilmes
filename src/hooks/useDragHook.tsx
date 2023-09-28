import { useState } from "react";

export const useDragHook = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
    e.currentTarget.style.cursor = "grabbing";
    e.preventDefault();
  };

  const endDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(false);
    e.currentTarget.style.cursor = "auto";
  };

  const drag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1;

    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return {
    startDrag,
    endDrag,
    drag,
  };
};
