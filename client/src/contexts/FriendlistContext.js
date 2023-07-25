import { createContext, useState } from 'react';

const FriendListContext = createContext();

function FriendListProvider({ children }) {
    const [friendListComponent,setFriendListComponent] = useState();
  
    const handleAllFriendListClicked = () =>{
        setFriendListComponent(1)
    }
    const handlePendingFriendListClicked = () =>{
        setFriendListComponent(2)
    }
    const handleSuggestFriendClicked = () =>{
        setFriendListComponent(3)
    }

   
    
    const value = { 
        friendListComponent,
        handleAllFriendListClicked,
        handlePendingFriendListClicked,
        handleSuggestFriendClicked,
    };
    return (<FriendListContext.Provider value={value}>
                {children}
            </FriendListContext.Provider>
            );
}

export { FriendListContext, FriendListProvider };
