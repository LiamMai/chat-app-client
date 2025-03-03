const API_URL = {
    AUTH: {
        SIGN_IN: '/auth/sign-in',
        SIGN_UP: '/auth/sign-up'
    },
    FRIEND: {
        GET_POTENTIAL: '/friend/potential/get',
        POST_SEND_REQUEST: '/friend-request/send',
        GET_SEND_FRIEND_REQUEST: '/friend-request/get-all/send',
        GET_RECEIVE_FRIEND_REQUEST: '/friend-request/get-all/receive',
        PATCH_FRIEND_REQUEST_ACCEPT: '/friend-request/accept',
        PATCH_FRIEND_REQUEST_DENY: '/friend-request/deny',
    }
}

export default API_URL