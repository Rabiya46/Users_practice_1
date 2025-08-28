interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return <button onClick={onClick} style={{border: '1px solid red'}}>{text}</button>;
};

export default Button;
