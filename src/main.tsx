
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@/components/theme-provider"
import Home from '@/pages/Home'
import Portfolio from './pages/Portfolio';
import Post from '@/pages/Post';
import Journal from './pages/Journal';
import Layout from "@/Layout/Layout"
const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter basename="/Notebook">
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />

          <Route path="/Journal" element={<Journal />} />
          <Route path="/Journal/:slug" element={<Post />} />

        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);