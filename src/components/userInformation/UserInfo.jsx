import { useUserInfo } from "../../hooks/useUserInfo";
import { Album } from "./Albums";
import { Todos } from "./Todos";
import { Information } from "./Information";

export const UserInfo = ({ userId }) => {
  const userInfo = useUserInfo(userId);

  return (
    <>
      {userInfo ? (
        <div>
          <Information userInfo={userInfo} />
          <Album userId={userInfo.id} />
          <Todos userId={userInfo.id} />
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};
