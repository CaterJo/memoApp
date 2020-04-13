import React, {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addMemo } from '../actions/memo';
import { Dispatch, } from 'redux';
import { RootState } from '../reducers';
import AddMemo from '../components/AddMemo'

const AddMemoContainer = function (){

  const dispatch: Dispatch = useDispatch();
  const {apiCalling} = useSelector((state:RootState)=>(
    {
      apiCalling: state.app.apiCalling
    }
  ))


  // Container가 보관하는게 맞는지????
  let [value, setValue]  = useState('');

  const handleChange = function(evt: React.FormEvent<HTMLTextAreaElement>)  {
    const value:string = evt.currentTarget.value;
    setValue(value);
  }

  const handleClickSave = () => {
    const content = value.trim();
    if (!content) return;

    dispatch(addMemo({content}));
  }



  return <AddMemo value={value} handleChange={handleChange} handleClickSave = {handleClickSave}  apiCalling={apiCalling}  />
}


export default AddMemoContainer