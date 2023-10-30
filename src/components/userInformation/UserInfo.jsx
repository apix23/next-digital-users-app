import { useUserInfo } from "../../hooks/useUserInfo";
import { Album } from "./Albums";
import { Todos } from "./Todos";
import { Information } from "./Information";
import "./UserInfo.css";

export const UserInfo = ({ userId }) => {
  const userInfo = useUserInfo(userId);

  return (
    <>
      {userInfo ? (
        <aside>
          <Information userInfo={userInfo} />
          <Album userId={userInfo.id} />
          <Todos userId={userInfo.id} />
        </aside>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};
