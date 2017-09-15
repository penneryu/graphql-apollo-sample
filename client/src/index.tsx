import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Person from './Person';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import './index.css';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
      uri: 'http://localhost:3001/graphql',
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Person />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
