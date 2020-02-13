/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    role
    messages {
      items {
        text
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      role
      messages {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getBrowserSub = `query GetBrowserSub($id: ID!) {
  getBrowserSub(id: $id) {
    endpoint
    expirationTime
    keys {
      auth
      p256dh
    }
  }
}
`;
export const listBrowserSubs = `query ListBrowserSubs(
  $filter: ModelBrowserSubFilterInput
  $limit: Int
  $nextToken: String
) {
  listBrowserSubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      endpoint
      expirationTime
      keys {
        auth
        p256dh
      }
    }
    nextToken
  }
}
`;
export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    text
  }
}
`;
export const listMessages = `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      text
    }
    nextToken
  }
}
`;
