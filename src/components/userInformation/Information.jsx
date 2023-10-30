export const Information = ({ userInfo }) => {
  return (
    <section className="user-info">
      <h2>User Info</h2>
      <p>name: {userInfo.name}</p>
      <p>username {userInfo.username}</p>
      <p>email {userInfo.email}</p>
      <p>city {userInfo.address.city}</p>
    </section>
  );
};
