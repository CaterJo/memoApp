import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import MemoListPage from '../pages/memo/MemoList';
import { Dispatch, bindActionCreators } from 'redux';
import { fetchMemoList } from '../actions/memo';
import { RootState } from '../reducers';
import {  Redirect, useLocation, useRouteMatch } from 'react-router';


const MemoListContainer = function(){

  const dispatch:Dispatch = useDispatch();
  const {pathname} = useLocation()
  const {isExact, url} = useRouteMatch();


  const {memos, apiCalling} = useSelector((state:RootState)=>{
    return {
      memos: state.memo.memos,
      apiCalling: state.app.apiCalling
    }
  })

  useEffect(()=>{
    dispatch(fetchMemoList())
  },[])

  // componentDidMount() {
  //   const {fetchMemoList} = props;
  //   fetchMemoList()
  // }

    // const {memos, match: {isExact, url}, location: {pathname}} = props
    const hasMemos = memos.length > 0
    const isAddPath = pathname === `${url}/add`

    if (isExact && hasMemos) {
      return <Redirect to={`${url}/${memos[0].id}`} />
    }


    return <MemoListPage memos={memos} apiCalling={apiCalling} hasAddMemoBtn={!isAddPath}/>
}

// const mapStateToProps = (state: RootState) => ({
//   memos: state.memo.memos,
//   apiCalling: state.app.apiCalling
// })

// const mapDispatchToProps = (dispatch: Dispatch) => 
//   bindActionCreators({
//     fetchMemoList
//   }, dispatch)

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MemoListContainer)

export default MemoListContainer;