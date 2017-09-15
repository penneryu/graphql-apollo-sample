import * as React from 'react';
import { gql, graphql } from 'react-apollo';

function Person (data: any) {
  const person = data;
  return person.data.person ? (
    <div>
    <button onClick={() => refetch()}>
      Refresh
    </button>
      <ul>
        <li key={person.data.person.id}>
          {person.data.person.firstName}
        </li>
      </ul>
  </div>
  ) : null;
}

function refetch() {

}

const query = gql`
  query person($id: ID) {
    person(id: $id) {
      id
      firstName
      lastName
      age
      phone
      isMobile
      bestFriend {
        id
        firstName
      }
    }
  }
`;

export default graphql(query, {
  options: () => ({
    variables: {
      id: 0 
    }
  })
})(Person);
