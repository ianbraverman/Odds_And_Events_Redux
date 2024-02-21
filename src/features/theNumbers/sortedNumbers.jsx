import { useSelector } from "react-redux";

export default function sortedNumbers() {
  const odds = useSelector((store) => store.sorting.odds);
  const evens = useSelector((store) => store.sorting.evens);

  return (
    <section>
      <h1>Sorted Numbers</h1>
      <article>
        <h1>Odds</h1>
        {odds.length > 0 ? <p>{odds.join(", ")}</p> : <p>Odds Empty</p>}
      </article>
      <article>
        <h1>Evens</h1>
        {evens.length > 0 ? <p>{evens.join(", ")}</p> : <p>Evens Empty</p>}
      </article>
    </section>
  );
}
