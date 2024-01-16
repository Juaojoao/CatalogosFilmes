import "./style.css";
import { useDragHook } from "../../hooks/useDragHook";
import { CardsMoviesProps } from "../../util/interface/tmdb-interface";
import { CardComponent } from "./card";

export const CardsDragComponent = ({
  movies,
  className,
  url,
}: CardsMoviesProps) => {
  const { startDrag, drag, endDrag, handleLinkClick } = useDragHook();

  return (
    <div
      className={`cards ${className}`}
      onMouseDown={startDrag}
      onMouseUp={endDrag}
      onMouseMove={drag}
    >
      <CardComponent
        movies={movies}
        url={url}
        handleClicked={handleLinkClick}
      />
    </div>
  );
};
