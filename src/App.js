import "./App.css";
import Hero from "./Sections/Hero";
import Toggle from "react-toggle";
import { useState } from "react";
import "react-toggle/style.css"; 

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`bg-${isDark ? "[#000000]" : "[#ffffff]"} w-screen h-screen transition-all duration-200`}>
      <div className="fixed top-4 right-4 z-10"> 
        <Toggle
          checked={isDark}
          onChange={({ target }) => setIsDark(target.checked)}
          icons={{ checked: "🌙", unchecked: "🔆" }}
          aria-label="Dark mode toggle"
        />
      </div>
      <div className="fixed top-1/2 transform -translate-y-1/2 left-0 hidden opacity-0">
          <div className={`w-[50px] h-[7px] ${isDark ? 'bg-[#ffffff]' : 'bg-[#000000]'}`}></div>
          <div className={`w-[25px] h-[7px] mt-3 ${isDark ? 'bg-[#ffffff] opacity-60' : 'bg-[#000000] opacity-60'} transition-all duration-200`}></div>
          <div className={`w-[25px] h-[7px] mt-3 ${isDark ? 'bg-[#ffffff] opacity-60' : 'bg-[#000000] opacity-60'} transition-all duration-200`}></div>
          <div className={`w-[25px] h-[7px] mt-3 ${isDark ? 'bg-[#ffffff] opacity-60' : 'bg-[#000000] opacity-60'} transition-all duration-200`}></div>
      </div>

      {/* Pass isDark as a prop to Hero */}
      <Hero isDark={isDark} />
    </div>
  );
}

export default App;
