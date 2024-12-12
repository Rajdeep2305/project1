import React, { useEffect, useState } from "react";
import Guideline from "./Components/Guideline";
import Signin from "./Components/Signin";
import SignUp from "./Components/SignUp";
import Forgot from "./Components/Forgot";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const socket = io('http://localhost:8080');

const App = () => {
  useEffect(() => {
    socket.on('notification', (data) => {
        toast.info(data.message);
    });

    return () => {
        socket.off('notification');
    };
}, []);

  // document.addEventListener("contextmenu", function (event) {
  //   event.preventDefault();
  // });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 700);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1400);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isDesktop) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', display:'flex', justifyContent:'center', alignItems:'center',height:'100vh', width:'100vw'}}>
        <p>Please use a larger screen (more than 1400px) to access this application.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#55d6c2] w-screen h-screen  flex justify-center items-center">
       <ToastContainer />
      <Router>
        <Routes>
          <Route path="*" element={<Guideline />} />
          <Route path="/SignIn" element={<Signin />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Forgot" element={<Forgot />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
