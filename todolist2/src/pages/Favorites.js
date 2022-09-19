import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
function FavoritesPage() {
  const favoritesCxt = useContext(FavoritesContext);

  let content;
  if (favoritesCxt.totalFavorites === 0) {
    content = <p>keine Favoriten</p>;
  } else {
    content = <MeetupList meetups={favoritesCxt.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
