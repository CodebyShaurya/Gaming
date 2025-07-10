

function InfiniteScrollAnimationPage() {
  return (
    <div className="flex overflow-hidden bg-purple-500">
      <ul className="flex animate-infinite-scroll gap-10  py-4 text-white">
        {[...stocks, ...stocks].map((stock) => {

          return (
            <li key={stock.ticker} className="flex items-center gap-2">
              <p className="text-gray-300 text-3xl">{stock.ticker}</p>
             
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InfiniteScrollAnimationPage;

const stocks = [
  { ticker: "AAPL"},
  { ticker: "GOOGL"},
  { ticker: "AMZN"},
  { ticker: "MSFT"},
  { ticker: "TSLA"},
  { ticker: "FB"},
  { ticker: "NFLX"},
  { ticker: "NVDA"},
  { ticker: "BABA"},
  { ticker: "V"},
  { ticker: "JPM"},
  { ticker: "DIS"},
  { ticker: "PYPL"},
  { ticker: "ADBE"},
  { ticker: "INTC"},
  { ticker: "CSCO"},
  { ticker: "ORCL"},
  { ticker: "IBM"},
  { ticker: "UBER"},
  { ticker: "LYFT"},
];