import Inbox from './Inbox';
function DefaultLayout({ children }) {
    return (
        <div className="font-fontDisplay flex text-lg">
            <Inbox />
            <div>{children}</div>
        </div>
    );
}
export default DefaultLayout;
