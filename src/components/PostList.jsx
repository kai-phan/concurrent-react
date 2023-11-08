let post;
const promise = fetch('https://jsonplaceholder.typicode.com/postss')
  .then((response) => response.json())
  .then((data) => (post = data));

const PostList = () => {
  if (!post) throw promise;

  return post.map((post) => {
    return (
      <div className="item" key={post.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default PostList;
