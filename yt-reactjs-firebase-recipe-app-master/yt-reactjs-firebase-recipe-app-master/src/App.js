import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Home from "./Home";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "./firebase.config";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check auth state on initial load and track changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user if authenticated, or null if not
      setLoading(false); // Once we check the auth state, stop loading
    });

    // Clean up the listener when component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array ensures this runs only once

  if (loading) {
    // While checking auth status, you can show a loading spinner or a blank screen
    return <div>Loading...</div>;
  }

  // Function to handle sign out
  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
    });
  };

  return (
    <div className="App"> 
      <Router>
        <nav>
          {!user ? (
            <>
              <Link to="/signin" className="mr-5 hover:text-sky-300">Sign In</Link>
              <Link to="/signup" className="hover:text-sky-300">Sign Up</Link>
            </>
          ) : (
            <>
              <button 
              className="py-2 px-4 rounded-md hover:bg-blue-400 hover:text-white" 
              onClick={handleSignOut}>Sign Out</button>
            </>
          )}
        </nav>

        <Routes>
          <Route path="/" element={user ? <Home /> : <SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>   
  );
}

export default App;
