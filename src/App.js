import { useFetchData } from "./hooks/customHook";

function App() {
  const { data, pending, error } = useFetchData("https://dummyjson.com/quotes");
  return (
    <div>
      {error && <div>{error}</div>}
      {pending && <div>loading...</div>}
      {data && (
        <div>
          {data?.map((quote) => (
            <div>{quote.quote}</div>
          ))}
        </div>
      )}
      <button>Fetch and display</button>
    </div>
  );
}

export default App;
