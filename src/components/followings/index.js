import UserMini from "../userMini";
import { getProfile , createFollow , unfollow  , getFollowing , getFollower , getMyFollowing } from "@/app/store/slices/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "next/navigation";
export default function Followings({ close , follow   }) {
  const userFollowing = useSelector((state) => state.profile.following) || []
  const myFollowing = useSelector((state) => state.profile.MyFollowing)|| []
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch()
  const {username} = useParams() 
  console.log('userFollowinguserFollowing', userFollowing)

  useEffect(() => {
    dispatch(getFollowing(username))
    dispatch(getFollower(username))
    dispatch(getMyFollowing(currentUser?.username))
  }, [username , userFollowing]);
  

  const isFollowing = (userId) => {
    return myFollowing.some(following => following.userFollower.id === userId);
  };
  

  let sortedFollowing = []
  sortedFollowing = [...userFollowing].sort((a , b)=>  a.userFollower?.fullName.localeCompare((b.userFollower?.fullName)))
 

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
         
              {sortedFollowing  && sortedFollowing.map((follower) => (
              <div key={follower.follower_id}>
                {isFollowing(follower.follower_id) ? (
                     <div className="follow">
                      <div>
                        <img src="/images/ink.png"/>
                        <p>{follower.userFollower?.fullName}</p>
                      </div>
                     
                       <button className="button btn-mini" onClick={()=> dispatch(unfollow(follower.follower_id))} >Following</button>
                   </div>
                ) : (
                  <div className="follow">
                    <div>
                      <img src="/images/ink.png"/>
                      <p>{follower.userFollower?.fullName}</p>
                    </div>
        
                  <button className="button btn-mini-blue" onClick={()=> dispatch(createFollow(follower.follower_id))}>Follow</button>
                </div>
                )}
              </div>
            ))}


            </div>


        </div>
      </div>
    );
  }