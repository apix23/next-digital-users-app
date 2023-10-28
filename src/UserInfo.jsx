import { useUserInfo } from "./hooks/useUserInfo";

export const UserInfo = ({ userId }) => {
  console.log("🚀 ~ file: UserInfo.jsx:4 ~ UserInfo ~ userId:", userId);

  const userInfo = useUserInfo(userId);

  return (
    <>
      {userInfo ? (
        <section className="user-info">
          <h2>User Info</h2>
          <p>name: {userInfo.name}</p>
          <p>username {userInfo.username}</p>
          <p>email {userInfo.email}</p>
          <p>city {userInfo.address.city}</p>
        </section>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};
