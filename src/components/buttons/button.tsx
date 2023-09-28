import "./style.css";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  classname?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  classname,
}) => {
  return (
    <button onClick={onClick} className={classname + " button"}>
      <span>{title}</span>
    </button>
  );
};
