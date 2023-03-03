/* eslint-disable react/jsx-no-duplicate-props */
import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NFTList from "./Pages/NFTList";
import Landing from "./Pages/Landing";


const App: React.FC = () => {
  const renderMainPage = () => {
    return <BrowserRouter>
      <Box display="flex">
        <Routes>
          <Route>
            <Route path="/NFTList" element={<NFTList />} />
          </Route>
          <Route>
            <Route path="/" element={<Landing />} />
          </Route>
        </Routes>
      </Box>
    </BrowserRouter>
  }
  return renderMainPage()
};

export default App;
