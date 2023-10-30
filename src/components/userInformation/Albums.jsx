import { useUserAlbums } from "../../hooks/useUserAlbums";

export const Album = ({ userId }) => {
  const albums = useUserAlbums(userId);
  return (
    <section className="user-albums">
      <h2>Albums</h2>
      {albums.map((album) => (
        <h4 key={album.id}>{album.title}</h4>
      ))}
    </section>
  );
};
