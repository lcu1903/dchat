function LogInErrorMessage({visible, onClose}) {
    if( !visible) return null;
    return (
        <div
            class="  fixed left-[38.5%] top-[10%]  mb-4 flex items-center rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400 bg-rose-400 shadow-2xl "
            role="alert"
            
        >
            <svg
                class="me-3 inline h-4 w-4 flex-shrink-0 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div className="text-white ">
                <span class="font-medium text-rose-900 shadow-sm">Lỗi</span> Vui lòng kiểm tra lại tài khoản và mật khẩu.  
            </div>
            <button className="pl-1 t" onClick={onClose}> X</button>
        </div>
    );
}

export default LogInErrorMessage;
