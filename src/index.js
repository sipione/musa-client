import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CategoryContextProvider from './common/contexts/categoryContext';
import ImageContextProvider from './common/contexts/imagesContext';
import UserContextPrivider from './common/contexts/userContext';
import Client from './database/apolloClient';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserContextPrivider>
    <CategoryContextProvider>
    <ImageContextProvider>
      <ApolloProvider client={Client}>
        <App />
      </ApolloProvider>
    </ImageContextProvider>
    </CategoryContextProvider>
    </UserContextPrivider>
  </React.StrictMode>
);

