## react  Router

* website link- https://dev.to/harini_magesh_fa40041cf8d/browserrouter-in-react-49j5

```bash
npm install react-router-dom
```

## within main.jsx
```bash
import { BrowserRouter } from "react-router-dom";
function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
```

## Routes and Route
```bash
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
```

## Navigation Link within Navbar
```bash
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
}
```


