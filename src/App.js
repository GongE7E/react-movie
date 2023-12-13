import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from './components/Header';
import { useEffect, useState } from 'react';

const queryClient = new QueryClient();

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/movieData.json')
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Header />
        <Outlet context={{ movies }} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
