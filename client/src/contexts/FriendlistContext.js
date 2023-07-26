import { createContext, useState } from 'react';

const FriendListContext = createContext();

function FriendListProvider({ children }) {
    const [friendListComponent,setFriendListComponent] = useState();
  
    const handleAllFriendListClicked = () =>{
        setFriendListComponent(1)
    }
    const handlePendingSentFriendListClicked = () =>{
        setFriendListComponent(2)
    }
    const handleSuggestFriendClicked = () =>{
        setFriendListComponent(3)
    }

   
    
    const value = { 
        friendListComponent,
        handleAllFriendListClicked,
        handlePendingSentFriendListClicked,
        handleSuggestFriendClicked,
    };
    return (<FriendListContext.Provider value={value}>
                {children}
            </FriendListContext.Provider>
            );
}

export { FriendListContext, FriendListProvider };
