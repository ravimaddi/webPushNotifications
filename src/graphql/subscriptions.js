/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateBrowserSub = `subscription OnCreateBrowserSub {
  onCreateBrowserSub {
    endpoint
    expirationTime
    keys {
      auth
      p256dh
    }
  }
}
`;
export const onUpdateBrowserSub = `subscription OnUpdateBrowserSub {
  onUpdateBrowserSub {
    endpoint
    expirationTime
    keys {
      auth
      p256dh
    }
  }
}
`;
export const onDeleteBrowserSub = `subscription OnDeleteBrowserSub {
  onDeleteBrowserSub {
    endpoint
    expirationTime
    keys {
      auth
      p256dh
    }
  }
}
`;
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
    text
  }
}
`;
export const onUpdateMessage = `subscription OnUpdateMessage {
  onUpdateMessage {
    text
  }
}
`;
export const onDeleteMessage = `subscription OnDeleteMessage {
  onDeleteMessage {
    text
  }
}
`;
