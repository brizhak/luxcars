import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCars, incrementPage } from '../../redux/carsSlice';

const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.cars.data);
  const loading = useSelector(state => state.cars.loading);
  const error = useSelector(state => state.cars.error);
  const page = useSelector(state => state.cars.page);

  useEffect(() => {
    dispatch(requestCars(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(requestCars(page + 1));
  };

  return (
    <div>
      <ul>
        {/* {cars.map(car => (
          <li key={car.id}>Авто</li>
        ))} */}
      </ul>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default CarsList;
