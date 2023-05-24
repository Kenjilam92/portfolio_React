import React from 'react';
import {useState} from 'react';
// import axios from 'axios';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';
import  {Router} from "@reach/router";
// import $ from 'jquery';
/////////////CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/modal.js";
import "bootstrap/js/dist/collapse.js";
import "./App.css";
/////////////Components
import Phone from "./Components/phone/Phone";
import Laptop from "./Components/laptop/Laptop";
import Error404 from 'Components/General/Error404';
// import Progressing from "./Components/General/Progressing";
// import Error404 from "./Components/General/Error404";
// import Login from "./Components/General/Login";
// import MessagesP from "./Components/General/Messages";
// import Invitation from "./Components/General/Invitation";
// import Admin from "./Components/General/Admin";
// import UserPage from "./Components/General/UserPage";
// import Tablet from "./Components/Tablet";

function App() {
  const isPhone = useMediaQuery(
    json2mq({
      maxWidth: 768,
    }),
  );

  const [Theme,setTheme] = useState({
    bg: "bg-transparent",
    btn: "btn text-white bg-transparent border border-white",
    text: "text-white"
  });
  
  return (
    <Router>

      {isPhone?
      <Phone
        path={`${process.env.REACT_APP_FOR_PATH}/`}
        Theme= {Theme}
        setThem = {setTheme}
      />
      :
      <Laptop
        path={`${process.env.REACT_APP_FOR_PATH}/`}
        Theme = {Theme}
        setTheme = {setTheme}
      />
      }
      <Error404
        path={`/*`}
      />
    </Router>
  );
}

export default App;
