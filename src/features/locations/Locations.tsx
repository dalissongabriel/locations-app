import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  addFavorite,
  fetchList,
  removeFavorite,
  selectFavorites,
  selectFilteredResults,
  selectStatus,
  setSearchQuery,
} from "@/features/locations/LocationsSlice";
import React, { Suspense, useEffect, useState } from "react";

const Search = React.lazy(() => import("@/components/Search"));
const Location = React.lazy(() => import("@/features/locations/Location"));
const Map = React.lazy(() => import("@/components/Map"));

const Locations = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [favoriteFilter, setFavoriteFilter] = useState(false);

  const status = useAppSelector(selectStatus);
  const results = useAppSelector(selectFilteredResults);
  const favoriteIdsList = useAppSelector(selectFavorites);

  const isInFavorites = (id: number) => {
    return favoriteIdsList.includes(id);
  };

  const resultsList = favoriteFilter
    ? results.filter((result) => isInFavorites(result.id))
    : results;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleToggleFavorite = (id: number) => {
    favoriteIdsList.includes(id)
      ? dispatch(removeFavorite(id))
      : dispatch(addFavorite(id));
  };

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setSearchQuery(search));
  }, [search, dispatch]);

  if (status === "loading") {
    return (
      <div className="py-10 px-2 h-screen bg-gray-200">
        <div className="overflow-hidden mx-auto max-w-md bg-gray-100 rounded-lg shadow-lg md:max-w-lg">
          <div className="md:flex">
            <div className="p-4 w-full">
              <div>Loading...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="py-10 px-2 h-screen bg-gray-200">
        <div className="overflow-hidden mx-auto max-w-md bg-gray-100 rounded-lg shadow-lg md:max-w-lg">
          <div className="md:flex">
            <div className="p-4 w-full">
              <div>Failed!</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 px-2 bg-gray-200 max-w-[80%] m-auto">
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="mxw-12 flex-1">
            <div className="flex justify-between items-center">
              <Suspense fallback="Loading search...">
                <Search onChangeHandle={handleSearch} />
              </Suspense>
              <div>
                <button
                  className="py-2 px-4 h-12 font-bold text-white w-48 bg-pink-500 rounded hover:bg-pink-600 focus:outline-none focus:shadow-outline"
                  onClick={() => setFavoriteFilter(!favoriteFilter)}
                >
                  {favoriteFilter ? "Show All" : "Show Favorites"}
                </button>
              </div>
            </div>
            <ul
              className="max-h-screen overflow-scroll"
              data-testid="result-list"
            >
              {resultsList.length === 0 && (
                <div className="py-2">
                  <div className="p-4 bg-white rounded-lg ">
                    <div className="text-center text-xl">No results found</div>
                  </div>
                </div>
              )}
              {resultsList.map((result, index) => (
                <li key={index}>
                  <Suspense fallback="Loading location...">
                    <Location
                      name={result.name}
                      title={result.place}
                      image={result.image}
                      price={result.price}
                      isFavorite={isInFavorites(result.id)}
                      onCLickHandle={() => handleToggleFavorite(result.id)}
                    />
                  </Suspense>
                </li>
              ))}
            </ul>
          </div>
          <Suspense fallback="Loading map...">
            <div className="pt-2 px-8 items-center max-w-[800px] h-screen">
              <Map />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Locations;
