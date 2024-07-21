
export default function Post({ item, posts, onClickPost }) {
    return (
      <div className="post-img" onClick={() => onClickPost(item)}>
        {item && item.imageUrl && <img src={`http://46.101.192.129:1000${item.imageUrl}`} alt="Post" />}
      </div>
    );
  }
  