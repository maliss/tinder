interface FooterButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const FooterButton = ({
  text,
  onClick,
  disabled = false,
}: FooterButtonProps) => {
  const colorClasses = text === "No" ? "dark-grey" : "orange";
  const disabledClasses = disabled ? "disabled" : "";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`footer-button ${colorClasses} ${disabledClasses}`}
    >
      {text}
    </button>
  );
};

export default FooterButton;
