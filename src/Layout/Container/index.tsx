import { useRoutes } from "react-router-dom";
import styled from "styled-components";
import NoFound from "../../pages/404";
import AuthRoute from "./AuthRoute";
import Home from "../../pages/Home";
import Discover from "../../pages/Discover";
import Library from "../../pages/Library";
import LikedSongs from "../../pages/Library/LikedSongs";
import Login from "../../pages/Login";
import PlayList from "../../pages/PlayList";
import Artist from "../../pages/Artist";
import Album from "../../pages/Album";
import MV from "../../pages/MV";
import User from "../../pages/User";
import Search from "../../pages/Search";
import SearchAlbums from "../../pages/Search/SearchAlbums";
import SearchArtists from "../../pages/Search/SearchArtists";
import SearchSongs from "../../pages/Search/SearchSongs";
import SearchMVs from "../../pages/Search/SearchMVs";
import SearchPlaylists from "../../pages/Search/SearchPlaylists";

const Main = styled("main")`
  min-height: calc(100vh - 64px);
  margin-top: 64px;
  padding: 0 10vw;
  padding-top: 20px;
  padding-bottom: 64px;
  color: white;
  background-color: var(--main-bgColor);
`;

const Container = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/discover",
      element: <Discover />,
    },
    {
      path: "/library",
      children: [
        {
          index: true,
          element: (
            <AuthRoute>
              <Library />
            </AuthRoute>
          ),
        },
        {
          path: "liked-songs",
          element: <LikedSongs />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/playlist/:id",
      element: <PlayList />,
    },
    {
      path: "/artist/:id",
      element: <Artist />,
    },
    {
      path: "/album/:id",
      element: <Album />,
    },
    {
      path: "/mv/:id",
      element: <MV />,
    },
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "/search",
      children: [
        {
          index: true,
          element: <Search />,
        },
        {
          path: "artists",
          element: <SearchArtists />,
        },
        {
          path: "albums",
          element: <SearchAlbums />,
        },
        {
          path: "songs",
          element: <SearchSongs />,
        },
        {
          path: "mvs",
          element: <SearchMVs />,
        },
        {
          path: "playlists",
          element: <SearchPlaylists />,
        },
      ],
    },
    {
      path: "*",
      element: <NoFound />,
    },
  ]);

  window.scrollTo(0, 0);
  return <Main>{element}</Main>;
};

export default Container;
