import { useEffect, useState } from "react";
import AxiosInstance from "../Axios";

const usePlaylist = () => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    // Fetch the playlist data
    const fetchPlaylist = async () => {
      try {
        const userId = parseInt(localStorage.getItem("userId"));
        const response = await AxiosInstance.get(`playlist`, {
          params: { user: userId },
        });
        setPlaylist(response.data);
      } catch (error) {
        console.error("Failed to fetch playlist", error);
      }
    };

    fetchPlaylist();
  }, []);

  const isGameInPlaylist = (gameId, userId) => {
    return playlist.some(
      (item) => item.game === gameId && item.user === userId
    );
  };

  // Delete item by sending data
  AxiosInstance.deleteWithData = (url, data) => {
    return AxiosInstance({
      method: "delete",
      url: url,
      data: data,
    });
  };

  const handlePlaylist = async (gameId) => {
    try {
      const userId = parseInt(localStorage.getItem("userId"));

      if (!isGameInPlaylist(gameId, userId)) {
        const playlistItem = await AxiosInstance.post(`playlist/`, {
          game: gameId,
          user: userId,
        });
        console.log("Game added to the list:", playlistItem.data);
        setPlaylist((prevPlaylist) => [...prevPlaylist, playlistItem.data]);
      } else {
        await AxiosInstance.deleteWithData(`playlist/delete`, {
          game: gameId,
          user: userId,
        });
        console.log("Game deleted from the list.");
        setPlaylist((prevPlaylist) =>
          prevPlaylist.filter(
            (item) => item.game !== gameId || item.user !== userId
          )
        );
      }
    } catch (error) {
      console.error(
        "Error processing game with the list:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return { playlist, isGameInPlaylist, handlePlaylist };
};

export default usePlaylist;
