import {
  BrowserRouter,
  Routes,
  Route,
  useInRouterContext,
} from "react-router-dom";
import "./App.css";

function InnerApp() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<div>JSON Builder Home</div>} /> */}
        <Route path="radha-kotecha" element={() => (<div>Radha Kotecha</div>)} />
      </Routes>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default function App() {
  const insideRouter = useInRouterContext();
  console.log("insideRouter ->", insideRouter)

  // ✅ If running standalone, wrap in BrowserRouter
  if (!insideRouter) {
    return (
      <BrowserRouter>
        <InnerApp />
      </BrowserRouter>
    );
  }

  // ✅ If already inside a router (socket-ui), just render routes
  return <InnerApp />;
}
