import { ApolloClient, InMemoryCache } from '@apollo/client';

const APIURL = 'https://api.thegraph.com/subgraphs/name/bertil291utn/blogcms';

export const clientConnection = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});
