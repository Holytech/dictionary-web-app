import Navbar from "./components/Navbar";
import { useEffect, useRef, useState } from "react";
import Search from "./components/Search";
import axios from "axios";
import Loading from "./components/Loading";
import View from "./components/View";
import ErrorPage from "./components/ErrorPage";
const App = () => {
  const ref = useRef(false);
  const [isDark, setIsDark] = useState(ref.current);
  const [font, setFont] = useState("serif");
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    ref.current = prefersDarkTheme.matches;
    setIsDark(ref.current);
  }, []);

  useEffect(() => {
    isDark
      ? (document.body.style.backgroundColor = "black")
      : (document.body.style.backgroundColor = "white");
  }, [isDark]);

  const submitForm = (e) => {
    e.preventDefault();
    setData("");
    setIsLoading(true);
    // console.log("WORD >>> " + word);
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    // console.log("URL >>> " + url);
    setWord("");
    axios
      .get(url)
      .then((res) => {
        // handle success
        // console.log(res.data);
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response.status == 404) {
          // console.log(error.response.status);
          setErr(error.response.data.title);
          setIsLoading(false);
        } else {
          setErr("Network Error Pls Try again");
          setIsLoading(false);
        }
        // console.log("ERROR >>>>> " + JSON.stringify(error.response.status));
      });
  };

  return (
    <>
      <div
        className={`font-${font} ${isDark ? "bg-black" : "bg-white"} w-full`}
      >
        <div
          className={`w-full md:max-w-[1000px] mx-auto px-[30px] md:px-0 py-6`}
        >
          <Navbar
            isDark={isDark}
            setIsDark={setIsDark}
            font={font}
            setFont={setFont}
          />
          <Search
            isDark={isDark}
            word={word}
            setWord={setWord}
            submitForm={submitForm}
            disabled={isLoading ? true : false}
          />
          {isLoading ? (
            <Loading isDark={isDark} />
          ) : data ? (
            <View isDark={isDark} data={data} font={font} />
          ) : err ? (
            <ErrorPage err={err} />
          ) : (
            // <>
            //   <div
            //     className={`${
            //       isDark ? "bg-black" : "bg-white"
            //     } w-full h-[80vh] flex items-center justify-center`}
            //   >
            //     {isDark ? (
            //       <img
            //         src="/App_dictionary_d.png"
            //         alt="App Dictionary"
            //         className="h-[200px] w-auto"
            //       />
            //     ) : (
            //       <img
            //         src="/App_dictionary_w.png"
            //         alt="App Dictionary"
            //         className="h-[200px] w-auto"
            //       />
            //     )}
            //   </div>
            // </>
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default App;
