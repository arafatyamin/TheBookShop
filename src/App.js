import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import { router } from './router/router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
    </AuthProvider>
    </QueryClientProvider>
    </div>
  );
}

export default App;
