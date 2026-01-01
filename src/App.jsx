import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopPages from "./pages/ShopPages";
import ProductDetials from "./pages/ProductDetials";

export default function App() {
  return (
    <div className="h-dvh w-full overflow-auto "> 
      <BrowserRouter>
        <Routes>
          <Route path="/shop" element={<ShopPages />}></Route>
          <Route path="/shop/product/:productId" element={<ProductDetials />}></Route>
        </Routes>
      </BrowserRouter >
    </div>
  );
}
