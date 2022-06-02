import {createContext, useState, useEffect} from 'react';

const LinkContext = createContext();

export const LinkProvider = ({children}) => {
  const [toast, setToast] = useState({
    link: {},
    show: false,
    operation: '',
  });
  const [showDeleteModal, setShowDeleteModal] = useState({
    link: {},
    show: false,
  });
  const [filteredLinkItems, setFilteredLinkItems] = useState([]);
  const [linkItems, setLinkItems] = useState([]);
  // fetch linkItems from localStorage
  useEffect(() => {
    const localData = checkLocalStorage();
    if (localData) {
      setLinkItems(localData);
    }
  }, []);

  //Add function**********

  const handleAdd = (newLinkItem) => {
    setLinkItems([newLinkItem, ...linkItems]);
    setToast({
      link: newLinkItem,
      show: true,
      operation: 'added',
    });
    setTimeout(() => {
      setToast({
        link: {},
        show: false,
        operation: '',
      });
    }, 1500);
    //adding localStorage
    const localData = checkLocalStorage();
    localData.unshift(newLinkItem);
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
    //toast message
    setToast({
      link: selectedItem,
      show: true,
      operation: ' deleted',
    });
    setTimeout(() => {
      setToast({
        link: {},
        show: false,
        operation: '',
      });
    }, 1500);
  };
  //Check LocalStorage**********
  const checkLocalStorage = () => {
    let localData;
    if (localStorage.getItem('linkItems') === null) {
      localData = [];
    } else {
      localData = JSON.parse(localStorage.getItem('linkItems'));
    }
    return localData;
  };
  ///Update Vode function***********
  const handleUpdate = (updatedItem, classname) => {
    if (classname === 'vote vote-up') {
      updatedItem.point++;
    } else {
      updatedItem.point--;
    }
    setLinkItems(
      linkItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    //updating localStorage
    const localData = checkLocalStorage();
    localData.forEach((item, index) => {
      if (item.id === updatedItem.id) {
        localData[index] = updatedItem;
      }
    });
    localStorage.setItem('linkItems', JSON.stringify(localData));
  };

  //Filter function***********

  const handleFilter = (filter) => {
    const copyOfLinkItems = linkItems;
    // filtered by point
    if (filter === 'most') {
      setFilteredLinkItems(copyOfLinkItems.sort((a, b) => b.point - a.point));
    }
    if (filter === 'less') {
      setFilteredLinkItems(copyOfLinkItems.sort((a, b) => a.point - b.point));
    }
    return filteredLinkItems;
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
        handleUpdate,
        handleFilter,
        filteredLinkItems,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export default LinkContext;
