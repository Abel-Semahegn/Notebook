
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@/components/theme-provider"
import App from '@/pages/Home'
import Layout from "@/Layout/Layout"
const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);