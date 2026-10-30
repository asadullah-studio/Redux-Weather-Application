import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchWeather } from "./redux/action/wheatherAction";
import SearchBox from "./components/SearchBox";
import CurrentWeather from "./components/CurrentWeather";
import ForecustWeather from "./components/ForecustWeather";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather("Rangpur"));
  }, []);
  return (
    <>
      <div className="flex flex-col gap-10 h-screen container mx-auto px-3">
        <div className="flex justify-end w-full py-5">
          <SearchBox></SearchBox>
        </div>
        <CurrentWeather></CurrentWeather>
        <ForecustWeather></ForecustWeather>
      </div>
    </>
  );
}

export default App;
