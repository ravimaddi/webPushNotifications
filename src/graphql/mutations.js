/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const lambdaTrigger = `mutation LambdaTrigger($msg: String) {
  lambdaTrigger(msg: $msg)
}
`;
export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
export const createBrowserSub = `mutation CreateBrowserSub(
  $input: CreateBrowserSubInput!
  $condition: ModelBrowserSubConditionInput
) {
  createBrowserSub(input: $input, condition: $condition) {
    endpoint
    expirationTime
    keys {
      auth
      p256dh
    }
  }
}
`;
export const updateBrowserSub = `mutation UpdateBrowserSub(
  $input: UpdateBrowserSubInput!
  $condition: ModelBrowserSubConditionInput
) {
  updateBrowserSub(input: $input, condition: $condition) {
    endpoint
    expirationTime
    keys {
      auth
      p256dh
    }
  }
}
`;
export const deleteBrowserSub = `mutation DeleteBrowserSub(
  $input: DeleteBrowserSubInput!
  $condition: ModelBrowserSubConditionInput
) {
  deleteBrowserSub(input: $input, condition: $condition) {
    endpoint
    expirationTime
    keys {
      auth
      p256dh
    }
  }
}
`;
export const createMessage = `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    text
  }
}
`;
export const updateMessage = `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    text
  }
}
`;
export const deleteMessage = `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    text
  }
}
`;
