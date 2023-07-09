import React, { useState, useEffect } from "react";
import axios from "axios";
import Tittle from "./Tittle";
import Input from "./Input";
import Button from "./Button.js";
import "./App.css";



function App(props) {
  const [apodData, setApodData] = useState();
  const [datePicker, setDatePicker] = useState(
    new Date("2023-02-14").toISOString().slice(0, 10)
  );
  const [imageDay, setİmageDay] = useState(true);
  const toggleİmage = () => {
    /* ADIM 4 */
    setİmageDay(!imageDay);
  };
  useEffect(() => {

    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "//ALINAMADI",
          date: datePicker,
        },
      })
      .then(function (response) {
        console.log(response);
        setApodData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () { });
  }, [datePicker]);

  if (!apodData) {
    return <div>Loading...</div>;
  }

  const { data, dateChange, currentDate } = props;
  function dateChangeHandler(e) {
    console.log(e.target.value);
    dateChange(e.target.value);
  }

  return (
    <div className="App">
      <header>
        <Tittle>NASA</Tittle>

        <nav>
          <ul>
            <li>
              <a href="#">Anasayfa</a>
            </li>
            <li>
              <a href="#">Hakkımızda</a>
            </li>
            <li>E
              <a href="#">İletişim</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <p id="h2-üst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <section>  <Input
            onChange={(e) => dateChangeHandler(e)}
            type="date"
            value={currentDate}
            name="apodDate"
          ></Input> </section>

          <h2> Astronom Picture of the Day</h2>
          {imageDay && <div id='imageDay' className='pic'></div>}
          <div className="govde">
            {apodData.media_type === "image" && (
              <img style={{ display: imageDay ? "block" : "none" }} src={apodData.hdurl} alt={apodData.title} width="700" height="500" />
            )}
            {apodData.media_type === "video" && (
              <iframe style={{ display: imageDay ? "block" : "none" }} width="520" height="400" src={apodData.url}></iframe>
            )}
            <Button id='toggleİmage' onClick={toggleİmage}>
              {imageDay ? "Gizle" : "Göster"}
            </Button>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
      </main>
      <footer>
        <p>Copy-right  &copy; 2023.6</p>
      </footer>
    </div>
  );
}

export default App;