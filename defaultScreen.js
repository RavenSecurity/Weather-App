import { GetInfo } from "./index.js";

export function DefaultScreen() {
  document.getElementById("cityInput").defaultValue = localStorage.getItem("City") || "Brussels";
  GetInfo();
}