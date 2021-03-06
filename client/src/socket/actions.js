const ACTIONS = {
  JOIN_TO_CALL: 'join_to_call',
  JOIN_INFO: 'join_info',
  JOIN_NEW_USER: 'join_new_user',
  LEFT_USER: 'left_user',
  START_STREAMING: 'start_streaming',
  STOP_STREAMING: 'stop_streaming',
  USER_START_STREAMING: 'user_start_streaming',
  USER_CHANGE_PROPERTIES: 'user_change_properties',
  USER_GRAPH_CHANGED: 'user_graph_changed',
  GET_GRAPH: 'get_graph',
  RECONNECT: 'reconnect',
  STREAMER_LEFT: 'streamer_left',
  JOIN: 'join',
  LEAVE: 'leave',
  SHARE_ROOMS: 'share-rooms',
  ADD_PEER: 'add-peer',
  REMOVE_PEER: 'remove-peer',
  RELAY_SDP: 'relay-sdp',
  RELAY_ICE: 'relay-ice',
  ICE_CANDIDATE: 'ice-candidate',
  SESSION_DESCRIPTION: 'session-description',
  CHANGE_ROLE: 'change_role',
  CHANGE_PROPERTIES: 'change_properties',
  PEER_ID: 'peer_id',
};

module.exports = ACTIONS;
