import { GlobalStyle } from "./styles/global";

import { Header } from "./Header";
import { Dashboard } from "./Dashboard";

export function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <GlobalStyle></GlobalStyle>
    </div>
  );
}
