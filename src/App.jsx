import React from 'react';
import PostList from './components/PostList.jsx';

function App() {
  return (
    <React.Suspense fallback={<div>Loading ...</div>}>
      <PostList />
    </React.Suspense>
  );
}

export default App;
