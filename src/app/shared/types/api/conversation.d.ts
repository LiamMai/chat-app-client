interface ConversationItemResponse {
    conversationId: string;
    conversationName: string;
    type: string;
    groupMemberIds: string[];
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
}

interface ConversationPaginationResponse extends BasePaginationResponse<ConversationItemResponse> {
    conversations: ConversationItemResponse[]
}
