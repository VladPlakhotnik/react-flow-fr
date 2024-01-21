import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./styles/globalStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
  </RecoilRoot>
);
