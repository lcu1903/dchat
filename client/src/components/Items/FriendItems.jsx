import Button from '../Button';

function FriendItems({ name, avatar, children, onClick }) {
    return (
        <div className={` flex w-[70%] flex-col overflow-y-hidden  `} onClick={onClick}>
            <Button className={'friend-list'}>
                <img alt="" src={avatar} className="mr-1 flex h-8 w-8 justify-end rounded-full"></img>
                <div className="w-[30%]">{name}</div>
                {children}
            </Button>
        </div>
    );
}

export default FriendItems;
