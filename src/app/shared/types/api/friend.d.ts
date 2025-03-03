// Request
interface SendFriendRequestBody {
  receiverId: string
}

interface ActionFriendRequest {
  friendRequestId: string
}


// Response
interface PotentialFriendItemResponse extends UserResponse { }


interface FriendRequestResponse {
  friendRequestId: string;
  status: string;
  user: UserResponse;
}

interface SendFriendRequestResponse extends BasePaginationResponse<FriendRequestResponse> {
  friendRequests: FriendRequestResponse[]
}
