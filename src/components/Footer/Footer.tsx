import FooterButton from "./FooterButton";

interface FooterProps {
  onClickYes: () => void;
  onClickNo: () => void;
  isLoading: boolean;
  likeCounter: number;
}

const Footer = ({
  onClickYes,
  onClickNo,
  isLoading,
  likeCounter,
}: FooterProps) => {
  return (
    <div className="footer">
      <FooterButton text="No" disabled={isLoading} onClick={onClickNo} />
      <FooterButton
        text="Yes"
        disabled={isLoading || likeCounter === 5}
        onClick={onClickYes}
      />
    </div>
  );
};

export default Footer;
