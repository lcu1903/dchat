import styles from "../../styles";

function SidebarChannel() {
    return ( <div className={`${styles.sidebarDefault}`}>                        
                <div className={`${styles.sidebarHeaderDefault}`}>
                        title
                </div>
                <div className={`${styles.sidebarContentDefault}`}>
                    Content
                </div>
    </div> );
}

export default SidebarChannel;