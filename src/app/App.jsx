import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import NumberBank from "../features/theNumbers/numberBank";
import SortedNumbers from "../features/theNumbers/sortedNumbers";

function App() {
  return (
    <main>
      <Provider store={store}>
        <h1>Odds and Events</h1>
        <NumberBank />
        <SortedNumbers />
      </Provider>
    </main>
  );
}

export default App;
