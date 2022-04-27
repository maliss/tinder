import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export interface CurrentData {
  image: string;
  name: string;
  age: string;
}

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [likeCounter, setLikeCounter] = useState<number>(0);
  const [currentData, setCurrentData] = useState<CurrentData>({
    image: "",
    name: "",
    age: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getBirthDate = (birth: string) => {
    const today = new Date();
    var birthDate = new Date(birth);
    const age = today.getFullYear() - birthDate.getFullYear();
    return age.toString();
  };

  const getData = async () => {
    setIsLoading(true);
    const { data } = await axios.get("https://randomuser.me/api/");
    const person = data.results[0];

    setCurrentData({
      image: person.picture.large,
      name: `${person.name.first} ${person.name.last}`,
      age: getBirthDate(person.dob.date),
    });
    setIsLoading(false);
  };

  const onClickYes = () => {
    setLikeCounter(likeCounter + 1);
    getData();
  };

  return (
    <div className="app-container">
      <Header likeCounter={likeCounter} />
      <Content isLoading={isLoading} data={currentData} />
      <Footer
        isLoading={isLoading}
        onClickYes={onClickYes}
        onClickNo={getData}
        likeCounter={likeCounter}
      />
    </div>
  );
}

export default App;
