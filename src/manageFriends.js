const initialState = { friends: [] };
export function manageFriends(state = initialState, action) {
  // your code here
  switch (action.type){
    
    case "friends/add":
      let newFriend = {
        name: action.payload.name,
        hometown: action.payload.hometown,
        id: action.payload.id
      }
      state.friends.push(newFriend)
      return {friends: state.friends};
    case "friends/remove":
      return {friends: state.friends.filter(friend => friend.id !== action.payload)};
    default:
      return state;
  }
}
