interface HeaderProps {
  likeCounter: number;
}

const Header = ({ likeCounter }: HeaderProps) => {
  return (
    <div className="header">
      <div className="header-title">Gender Neutral Dating App</div>
      <div className="header-count">{likeCounter}</div>
    </div>
  );
};

export default Header;
