import { useUserAlbums } from "../../hooks/useUserAlbums";

export const Album = ({ userId }) => {
  const albums = useUserAlbums(userId);
  return (
    <section className="user-albums">
      <img src="" alt="" />
      <h2>Albums</h2>
      {albums.map((album) => (
        <div key={album.id} className="albun-info">
          <img src={album.imgUrl} alt="" />
          <h4>{album.title}</h4>
        </div>
      ))}
    </section>
  );
};
