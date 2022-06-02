import {createContext, useState, useEffect} from 'react';

const LinkContext = createContext();

export const LinkProvider = ({children}) => {
  const [toast, setToast] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState({
    link: {},
    show: false,
  });
  const [linkItems, setLinkItems] = useState([]);
  // init linkItems from localStorage
  useEffect(() => {
    const localData = checkLocalStorage();
    if (localData) {
      setLinkItems(localData);
    }
  }, []);

  //Add function**********

  const handleAdd = (newLinkItem) => {
    setLinkItems([...linkItems, newLinkItem]);
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 1500);
    //adding localStorage
    const localData = checkLocalStorage();
    localData.push(newLinkItem);
    localStorage.setItem('linkItems', JSON.stringify(localData));
  };

  //Delete function************
  const handleDelete = (selectedItem) => {
    setLinkItems(linkItems.filter((item) => item.id !== selectedItem.id));
    //deleting localStorage
    const localData = checkLocalStorage();
    localData.forEach((item, index) => {
      if (item.id === selectedItem.id) {
        localData.splice(index, 1);
      }
    });
    localStorage.setItem('linkItems', JSON.stringify(localData));
  };
  //Check LocalStorage
  const checkLocalStorage = () => {
    let localData;
    if (localStorage.getItem('linkItems') === null) {
      localData = [];
    } else {
      localData = JSON.parse(localStorage.getItem('linkItems'));
    }
    return localData;
  };

  return (
    <LinkContext.Provider
      value={{
        toast,
        showDeleteModal,
        setShowDeleteModal,
        setToast,
        linkItems,
        setLinkItems,
        handleAdd,
        handleDelete,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export default LinkContext;
