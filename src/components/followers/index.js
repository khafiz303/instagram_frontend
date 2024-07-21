import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { getFollowing, getFollower, getMyFollowing, createFollow, unfollow } from "@/app/store/slices/profileSlice";

export default function Followers({ close, follow }) {
  const userFollowers = useSelector((state) => state.profile.followers) || [];
  const myFollowing = useSelector((state) => state.profile.MyFollowing) || [];
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const { username } = useParams();

  useEffect(() => {
    dispatch(getFollowing(username));
    dispatch(getFollower(username));
    dispatch(getMyFollowing(currentUser?.username));
  }, [username, currentUser?.username, dispatch , userFollowers]);

  const isFollowing = (userId) => {
    return myFollowing.some(following => following.userFollower.id === userId);
  };
  let sortedFollowers = []
  sortedFollowers = [...userFollowers].sort((a , b)=>  a.userFollowing?.fullName.localeCompare((b.userFollowing?.fullName)))
 
  return (
    <div className="modal">
      <div className="modal-white-drop" onClick={close}></div>
      <div className="modal-inner-mini">
        <div className="header-follow">
          <span></span>
          <h2>{follow}</h2>
          <span onClick={close}>X</span>
        </div>
        <div>
        {
          Array.isArray(sortedFollowers) && sortedFollowers.length > 0 ? (
            sortedFollowers.map((follower) => (
              <div key={follower.user_id} className="follow">
                <div>
                  <img src="/images/ink.png" alt="User Avatar" />
                  <p>{follower.userFollowing?.fullName}</p>
                </div>
                {isFollowing(follower.user_id) ? (
                  <button className="button btn-mini" onClick={() => dispatch(unfollow(follower.user_id))}>Following</button>
                ) : (
                  <button className="button btn-mini-blue" onClick={() => dispatch(createFollow(follower.user_id))}>Follow</button>
                )}
              </div>
            ))
          ) : null
        }

        </div>
      </div>
    </div>
  );
}
