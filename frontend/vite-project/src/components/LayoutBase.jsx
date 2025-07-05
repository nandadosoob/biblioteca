import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";

export default function LayoutBase() {
  return (
    <div style={{ display: "flex" }}>
      <Menu />
      <div style={{ flex: 1, padding: "20px", marginLeft: "20vw"}}>
        <Outlet />
      </div>
    </div>
  );
}
