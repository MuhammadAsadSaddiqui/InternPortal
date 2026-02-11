export default function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-t-blue-500 border-b-purple-500 border-l-green-500 border-r-red-500 rounded-full animate-spin"></div>
        </div>
    );
}
