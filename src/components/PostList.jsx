const createResource = (promise, cb = (d) => d) => {
  let data;
  let error;

  const suspender = promise()
    .then(cb)
    .then(
      (d) => (data = d),
      (e) => (error = e),
    );

  return {
    read() {
      if (error) throw error;
      if (!data) throw suspender;

      return data;
    },
  };
};

const postResource = createResource(
  () => fetch('https://jsonplaceholder.typicode.com/posts?_limit=10'),
  (res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Server response wasn't OK");
    }
  },
);

const PostList = () => {
  const post = postResource.read();

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
