

function YesNoModal({ visible, onClose, ...props  }) {
    
    const handleClickYes = () =>{
        props.yesClicked(true)
        onClose();

    }
    
    if (!visible) return null;

    return (
        <div
            className=" fixed left-0 top-0 z-50 h-screen max-h-full w-screen items-center justify-center  overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 pl-[35%] pt-[10%]  "
            role="alert"
        >
            <div className="relative max-h-full w-full max-w-md p-4">
                <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
                    <button
                        type="button"
                        className="absolute end-2.5 top-3 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="popup-modal"
                        onClick={onClose}
                    >
                        <svg
                            className="h-3 w-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 text-center md:p-5">
                        <svg
                            className="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Bạn có chắc muốn thực hiện hành động này?
                        </h3>
                        <button
                            data-modal-hide="popup-modal"
                            type="button"
                            className="dark:focus:ring:rose-800 me-2 inline-flex items-center rounded-lg bg-rose-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-300"
                            onClick={handleClickYes}
                        >
                            Có, tôi chắc chắn
                        </button>
                        <button
                            data-modal-hide="popup-modal"
                            type="button"
                            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                            onClick={onClose}
                        >
                            Không, Hủy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YesNoModal;
