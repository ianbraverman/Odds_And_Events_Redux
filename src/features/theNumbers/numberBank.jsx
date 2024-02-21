import { useDispatch, useSelector } from "react-redux";
import { addNumber, sortOne, sortAll } from "./sortingSlice";
import { useState } from "react";

export default function NumberBank() {
  const bank = useSelector((store) => store.sorting.bank);
  const [theBank, setTheBank] = useState([]);
  const dispatch = useDispatch();

  const onSort = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.name;

    const theBankAmount = +theBank;

    if (action === "addToBank") {
      dispatch(addNumber(theBankAmount));
    } else if (action === "sortOne") {
      dispatch(sortOne());
    } else if (action === "sortAll") {
      dispatch(sortAll());
    }
  };

  return (
    <section>
      <form onSubmit={onSort}>
        <label>
          Add A Number To The Bank
          <input
            type="number"
            min={0}
            value={theBank}
            onChange={(_event) => setTheBank(_event.target.value)}
          />
          <button name="addToBank">Add Number</button>
        </label>
        <article>
          <h1>Number Bank: </h1>
          {bank.length > 0 ? <p>{bank.join(", ")}</p> : <p>Bank Empty</p>}
          <section>
            <button name="sortOne">Sort One</button>
            <button name="sortAll">Sort All</button>
          </section>
        </article>
      </form>
    </section>
  );
}
