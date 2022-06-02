import './Toast.scss';
import LinkContext from '../../../context/LinkContext';
import {useContext} from 'react';

const Toast = () => {
  const {toast} = useContext(LinkContext);

  return (
    <div className={`btn toast ${toast.show ? 'add' : ''}`}>
      {toast.show && toast.link.name + ' ' + toast.operation}
    </div>
  );
};

export default Toast;
