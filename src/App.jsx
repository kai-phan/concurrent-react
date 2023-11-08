import React from 'react';
import PostList from './components/PostList.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

function App() {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading ...</div>}>
        <PostList />
      </React.Suspense>
    </ErrorBoundary>
  );
}

export default App;
