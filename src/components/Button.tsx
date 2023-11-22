import ReactNode from "react";

interface Props {
  children: string;
  //optional color variable able to used any color or not at all
  color?:
    | "primary"
    | "secondary"
    | "sucess"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
