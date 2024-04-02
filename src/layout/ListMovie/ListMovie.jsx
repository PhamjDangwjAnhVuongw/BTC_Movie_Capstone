import React, { useEffect, useState } from "react";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovieThunk, handleAllMovie } from "../../redux/slice/phimSlice";

const ListMovie = () => {
  // const [arrMovie, setArrMovie] = useState([]);
  //Có thể coi tham số state đại diện cho object reducer có ở store
  const { arrMovie } = useSelector((state) => state.phimSlice);
  const dispatch = useDispatch();
  console.log(arrMovie);

  useEffect(() => {
    dispatch(getAllMovieThunk());
  }, []);

  return (
    <div className="mt-10 grid grid-cols-4 gap-10">
      {arrMovie.map((movie, index) => {
        return (
          <div className="movie_item space-y-4">
            <img
              className="w-full h-96 object-cover rounded"
              src={movie.hinhAnh}
              alt=""
            />
            <div>
              <h3 className="mb-3">
                <span className="bg-red-500 text-white rounded py-1 px-2 mr-3 font-semibold">
                  C18
                </span>
                <span className="text-xl font-semibold">{movie.tenPhim}</span>
              </h3>
              <p className="line-clamp-2">{movie.moTa}</p>
            </div>
            <div>
              <button>Mua vé</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListMovie;
