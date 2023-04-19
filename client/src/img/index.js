import img1 from './img1.jpeg';
import download from './download.jpg';

export const FriendIcon = ({ width = '24px', height = '24px', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        x="0"
        y="0"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path
                fill="currentColor"
                fillRule="nonzero"
                d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                transform="translate(2 4)"
            ></path>
            <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
        </g>
    </svg>
);

export const InboxIcon = ({ width = '1.6rem', height = '2.8rem', className }) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none">
            <path
                d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z"
                fill="currentColor"
            ></path>
        </svg>
    );
};

export const HelpIcon = ({ width = '1.6rem', height = '2.8rem', className }) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
            ></path>
        </svg>
    );
};

export { img1, download };
