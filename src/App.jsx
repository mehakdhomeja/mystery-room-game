
import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Cases from "./pages/Cases";
import Investigation from "./pages/Investigation";
import EvidenceBoard from "./pages/EvidenceBoard";
import Interrogation from "./pages/Interrogation";
import PuzzleRoom from "./pages/PuzzleRoom";
import CaseReport from "./pages/CaseReport";

import { initialProgress } from "./data/cases";

import "./App.css";


function AnimatedRoutes({ progress, setProgress }) {
  const location = useLocation();

  const pageProps = {
    progress,
    setProgress
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="page-container"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
      >
        <Routes location={location}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard {...pageProps} />}
          />

          <Route
            path="/cases"
            element={<Cases />}
          />

          <Route
            path="/investigation"
            element={<Investigation {...pageProps} />}
          />

          <Route
            path="/evidence"
            element={<EvidenceBoard {...pageProps} />}
          />

          <Route
            path="/interrogation"
            element={<Interrogation {...pageProps} />}
          />

          <Route
            path="/puzzle"
            element={<PuzzleRoom {...pageProps} />}
          />

          <Route
            path="/report"
            element={<CaseReport {...pageProps} />}
          />

          <Route
            path="*"
            element={
              <div className="empty-state">
                <h2>404 — Case Not Found</h2>
                <p>This investigation does not exist.</p>
              </div>
            }
          />

        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}


function AppLayout({ progress, setProgress }) {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div className={isHome ? "app home-layout" : "app"}>

      {!isHome && <Sidebar />}

      <main
        className={
          isHome
            ? "main-content full"
            : "main-content"
        }
      >

        {!isHome && <Topbar />}

        <AnimatedRoutes
          progress={progress}
          setProgress={setProgress}
        />

      </main>
    </div>
  );
}


function App() {

  const [progress, setProgress] = useState(() => {

    try {

      const saved = localStorage.getItem("mysteryProgress");

      if (saved) {

        const parsed = JSON.parse(saved);

        return {
          ...initialProgress,
          ...parsed
        };

      }

      return { ...initialProgress };

    } catch (error) {

      console.error("Error loading progress:", error);

      return { ...initialProgress };

    }

  });


  useEffect(() => {

    try {

      localStorage.setItem(
        "mysteryProgress",
        JSON.stringify(progress)
      );

    } catch (error) {

      console.error("Error saving progress:", error);

    }

  }, [progress]);


  return (
    <BrowserRouter>

      <AppLayout
        progress={progress}
        setProgress={setProgress}
      />

    </BrowserRouter>
  );

}


export default App;
