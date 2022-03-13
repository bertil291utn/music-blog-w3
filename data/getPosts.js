/* eslint-disable import/no-anonymous-default-export */

import { clientConnection } from './connect';
import { gql } from '@apollo/client';

export default async (tokensQuery) => {
  try {
    const response = await clientConnection.query({
      query: gql(tokensQuery),
    });
    return response.data.posts;
  } catch (error) {
    throw new Error(error.message);
  }
};
