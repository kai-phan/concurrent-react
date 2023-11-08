let post;
let error;
const promise = fetch('https://jsonplaceholder.typicode.com/postss')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Server response wasn't OK");
    }
  })
  .then((data) => (post = data))
  .catch((err) => (error = err));

const PostList = () => {
  if (error) throw error;
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
