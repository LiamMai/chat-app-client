declare type SelectFriendRequest = 'add' | 'denied' | 'accept'

declare type TypeUserCardComponent = 'send-friend-request' | 'suggest-friend-request' | 'receive-friend-request'

declare interface UserDataUserCard extends UserResponse {
    status?: STATUS_FRIEND_REQUEST,
    friendRequestId?: string
}


declare interface EmitEventSelectType {
    user: UserDataUserCard,
    type: SelectFriendRequest
}


