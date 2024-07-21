'use client';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "@/app/store/slices/postSlice";
import { useRouter } from "next/navigation";
import { unfollow, createFollow } from "@/app/store/slices/profileSlice";
import Link from "next/link";

export default function UserMini({
    username,
    shadow,
    dop,
    text,
    remove,
    follow,
    size,
    imgSize,
    selectedPost,
    deleted,
    close,
    follower,
    myFollowing,
    following,
    link,
    userId
}) {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    
    const id = selectedPost;
    const dispatch = useDispatch();
    const myId = useSelector((state) => state.auth.currentUser?.id);

  
    const openWindow = () => {
        setOpen(true);
    };
    return (
        <div className={`user-mini ${shadow} ${size}`}>
            <div className="user-m-img">
                <img src="/images/ink.png" alt="Profile Picture" className={imgSize} />
                {!follow && <p>{username}</p>}
                {follow && (
                    <div className="df">
                        {link ?  <Link href={`/profile/${username}`}><p>{username}</p></Link> : <p>{username}</p> }
                   
                    </div>
                )}
            </div>
            <div>
                {text && <p>{text}</p>}
                {dop && userId == myId && <span onClick={openWindow}>{dop}</span>}
                {remove && (
                    <button className="button btn-mini" onClick={deleted}>
                        {remove ? 'remove' : ''}
                    </button>
                )}
                
                
            </div>
            {open && (
                <div className="toggle">
                    <div onClick={() => router.push('/edit-post/' + id)}>
                        <p>Edit</p>
                    </div>
                    <div>
                        <p onClick={() => { dispatch(deletePost(id)); close(); }}>
                            Delete
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
