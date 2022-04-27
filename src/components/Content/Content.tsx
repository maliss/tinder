import { CurrentData } from "../../App";

interface ContentProps {
  isLoading: boolean;
  data: CurrentData;
}

const Content = ({ isLoading, data }: ContentProps) => {
  return (
    <div className="content">
      {isLoading ? (
        <div className="is-loading">Loading...</div>
      ) : (
        <div>
          <img className="content-photo" alt="" src={data.image} />
          <div className="content-name">{data.name}</div>
          <div className="content-age">({data.age})</div>
        </div>
      )}
    </div>
  );
};

export default Content;
