import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { InMemoryCache, ApolloClient } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: import.meta.env.GRAPHQL_PATH
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
