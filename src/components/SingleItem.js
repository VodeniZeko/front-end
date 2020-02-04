import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fetch } from "../actions/Apicalls";

const SingleItem = ({ match }) => {
  const id = match.params.id;
  console.log(id);
  const products = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Fetch());
  }, [dispatch]);

  return <div>{console.log(`right here`, products[`${id}` - 1])}</div>;
};
export default SingleItem;

// // import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Movie = ({ match }) => {
//   const [movie, setMovie] = useState();

//   useEffect(() => {
//     const id = match.params.id;
//     // change ^^^ that line and grab the id from the URL
//     // You will NEED to add a dependency array to this effect hook

//     axios
//       .get(`http://localhost:5000/api/movies/${id}`)
//       .then(response => {
//         setMovie(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   const saveMovie = props => {
//     console.log(props);
//   };

//   if (!movie) {
//     return <div>Loading movie information...</div>;
//   }

//   const { title, director, metascore, stars } = movie;
//   return (
//     <div className="save-wrapper">
//       <div className="movie-card">
//         <h2>{title}</h2>
//         <div className="movie-director">
//           Director: <em>{director}</em>
//         </div>
//         <div className="movie-metascore">
//           Metascore: <strong>{metascore}</strong>
//         </div>
//         <h3>Actors</h3>

//         {stars.map(star => (
//           <div key={star} className="movie-star">
//             {star}
//           </div>
//         ))}
//       </div>
//       <button onClick={saveMovie} className="save-button">
//         Save
//       </button>
//     </div>
//   );
// };

// export default Movie;
