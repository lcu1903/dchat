import Button from '../Button';

function FriendItems({ name, avatar, children }) {
    return (
        <div className={` flex w-full flex-col overflow-y-hidden `}>
            <Button className={'friend-list'}>
                <img alt="" src={avatar} className="mr-1 flex h-8 w-8 justify-end rounded-full"></img>
                <div className="w-[30%]">{name}</div>

                {children}
            </Button>
        </div>
    );
}

export default FriendItems;
