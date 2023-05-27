const styles = {
    boxHeight: 'h-12',
    inboxWidth: 'w-[72px]',
    directMessageWidth: 'w-60',
    contentWidth: 'w-[calc(100vw_-_72px_-_240px)]',
    black: '#000000',
    greenLime: '#368044',
    textHovered: '#f2f3f5',
    channelWidth: 'w-56',
    channelHeight: 'h-9',
    chatInputWidth: 'w-[calc(100vw_-_72px_-_240px_-_50px)]',
    chatMessageWidth: 'w-[calc(100vw_-_72px_-_240px_-_90px)]',
    chatHeight: 'h-[calc(100vh_-_48px_-_70px)]',

    sidebarDefault: 'bg-sidebar flex flex-wrap h-screen w-60',
    sidebarHeaderDefault: 'flex h-12 w-60 items-center px-[10px] shadow text-text',
    sidebarContentDefault: 'flex flex-col ml-2 pr-[10px] text-text w-56 h-[calc(100vh_-_102px)]',
    headerDefault: 'flex font-fontDisplay px-2 shadow h-12 items-center',
    channelDefault: 'flex w-56 h-9 hover:bg-hovered items-center pt-2 rounded px-2',

    signInTitleDefault: 'text-textHovered flex h-20 items-center justify-center text-xl',
    signInBtnDefault:
        'justify-center bg-itemsTheme hover:bg-itemsHoverTheme text-textHovered w-full h-16 mb-4 mt-2 p-[10px] rounded-sm',
    signInDefault: 'hero-bg flex h-screen w-screen flex-col items-center justify-center ',
    signInContentDefault: 'bg-content h-[370px] w-[416px] rounded-lg p-8',

    inputBoxDefault: 'bg-hovered flex flex-col h-[250px] justify-center rounded-sm',
    inputFormDefault: 'flex w-full flex-col',
    inputContentDefault: 'text-text flex h-16 w-full flex-col px-4',
    inputDefault: 'bg-content h-full rounded-sm py-2 outline-none',
};

export default styles;
