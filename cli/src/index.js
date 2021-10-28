import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";

const queryCache = new QueryCache();
const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});



ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
