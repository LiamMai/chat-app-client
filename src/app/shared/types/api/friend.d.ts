// Request
interface SendFriendRequestBody {
  receiverId: string
}


// Response
interface PotentialFriendItemResponse {
  userid: string;
  firstname: null;
  lastname: null;
  email: string;
  avatar: null;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
}