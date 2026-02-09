"use client";

export default function Error({ error, reset }) {
    return (
        <div className="p-5 font-mono">
            <h1 className="text-2xl text-red-500">Something went wrong!</h1>
            <p>{error.message}</p>
            <button onClick={() => reset()} className="mt-4 bg-black text-white px-4 py-2 rounded">
                Try Again
            </button>
        </div>
    );
}