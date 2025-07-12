

function InfiniteScrollAnimationPage() {
  return (
    <div className="flex overflow-hidden bg-purple-500">
      <ul className="flex animate-infinite-scroll gap-10  py-4 text-white">
        {[...stocks, ...stocks].map((stock) => {

          return (
            <li key={stock.ticker} className="">
              <p className="text-gray-300 text-3xl w-[270px]">{stock.ticker}</p>
             
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InfiniteScrollAnimationPage;

const stocks = [
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"}, 
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
  { ticker: "COMING SOON"},
];