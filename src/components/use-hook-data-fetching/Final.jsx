import { Suspense, use, useState } from "react";

const fetchJokes = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  return res.json();
};

const JokeItem = ({ jokePromise }) => {
  const joke = use(jokePromise);

  return (
    <h3 className="text-xl font-medium italic text-neutral-900">
      {joke.value}
    </h3>
  );
};

export default function Joke() {
  const [randomJoke, _setRandomJoke] = useState(fetchJokes());
  return (
    <div className="shadow p-4 my-6 rounded bg-emerald-50">
      <Suspense
        fallback={
          <h2 className="shadow p-4 bg-gray-50 text-xl text-center font-bold mt-5">
            Loading...
          </h2>
        }
      >
        <JokeItem jokePromise={randomJoke} />
      </Suspense>
    </div>
  );
}
