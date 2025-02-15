import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { GlobalStyle } from './styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<GlobalStyle />
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
