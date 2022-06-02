import './Toast.scss';
import LinkContext from '../../../context/LinkContext';
import {useContext} from 'react';

const Toast = ({itemAdd, itemDelete, item}) => {
  const {toast} = useContext(LinkContext);

  return <div className={`btn toast ${toast ? 'add' : ''}`}>{item}</div>;
};

export default Toast;
