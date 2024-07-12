import './App.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { UserProvider } from './contexts/UserContext';
import Logout from './components/Logout/Logout';
import Create from './components/Create/Create';
import CreateShow from './components/CreateShow/CreateShow';
import AllMovies from './components/AllMovies/AllMovies';
import AllShows from './components/AllShows/AllShows';
import MovieDetails from './components/MovieDetails/MovieDetails';
import ShowDetails from './components/ShowDetails/ShowDetails';
import MovieEdit from './components/MovieEdit/MovieEdit';
import ShowEdit from './components/ShowEdit/ShowEdit';
import MyMovies from './components/MyMovies/MyMovies';
import MyShows from './components/MyShows/MyShows';
import MovieReview from './components/MovieReview/MovieReview';
import ShowReview from './components/ShowReview/ShowReview';
import UserRoles from './components/UserRoles/UserRoles';
import UserSuggestion from './components/UserSuggestion/UserSuggestion';
import MovieSuggestions from './components/MovieSuggestions/MovieSuggestions';
import ShowSuggestions from './components/ShowSuggestions/ShowSuggestions';
import PrivateRoute from './components/common/PrivateRoute';
import NotFoundComponent from './components/common/NotFoundComponent';
import { MovieProvider } from './contexts/MovieContext';
import { ShowProvider } from './contexts/ShowContext';

function App() {
  return (
    <div>
      <UserProvider>
        <MovieProvider>
        <ShowProvider>
        <Header />

        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/catalog/movies' element={<AllMovies/>} />
          <Route path='/catalog/shows' element={<AllShows/>} />
          <Route path='/catalog/movies/:movieId' element={<MovieDetails/>} />
          <Route path='/create/movie' element={<Create />} />
          <Route path='/catalog/shows/:showId' element={<ShowDetails/>} />
          <Route path='/create/show' element={<CreateShow />} />
          <Route path='/catalog/movies/:movieId/edit' element={<MovieEdit />} />
          

          <Route element={<PrivateRoute />}>
            <Route path='/logout' element={<Logout />} />
            
            
            <Route path='/likedmovies' element={<MyMovies />} />
            <Route path='/likedshows' element={<MyShows />} />
            
            
            
            <Route path='/catalog/movies/:movieId/review' element={<MovieReview />} />
            <Route path='/catalog/shows/:showId/review' element={<ShowReview />} />
            <Route path='/catalog/shows/:showId/edit' element={<ShowEdit />} />
            <Route path='/catalog/movies/suggestions' element={<MovieSuggestions />} />
            <Route path='/catalog/shows/suggestions' element={<ShowSuggestions />} />
            <Route path='/users/roles' element={<UserRoles />} />
            <Route path='/users/suggestion' element={<UserSuggestion />} />
          </Route>

          <Route path='*' element={<NotFoundComponent />} />

        </Routes>
        </ShowProvider>
        </MovieProvider>
      </UserProvider>
    </div>
  );
}

export default App;
