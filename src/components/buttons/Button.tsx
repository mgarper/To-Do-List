type buttonProps = {
  text: string;
  disabled?: boolean;
  onClick: () => void;
};

function Button(props : buttonProps) {
  const { text , disabled, onClick} = props;
  return <button onClick={onClick} disabled={disabled}>{text}</button>;
}

export default Button;