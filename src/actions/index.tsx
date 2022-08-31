import jsonPlaceholder from '../APIs/jsonPlaceholder';

export const fetchPosts = () => {
  return async function (dispatch: any, getState: any) {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
  };
};

export const fetchUser = (id:number) => async (dispatch:any )=>{
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({type:'FETCH_USERS', payload:response.data})
}
