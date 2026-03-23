import { useState } from 'react'

export function FolderItem({ block, children }) {
    const [open, setOpen] = useState(true);

    return (
        <div
            style={{
                backgroundColor: block.style?.bgColor,
                border: block.style?.border,
            }}
        >
            <button
                className="flex justify-between w-full px-4 py-3 font-bold cursor-pointer"
                onClick={() => setOpen(o => !o)}
            >
                {block.content?.title || "Folder"}
                <span>{open ? "⌄" : "⌃"}</span>
            </button>

            {open && (
                <div className="p-4 space-y-3">
                    {children}
                </div>
            )}
        </div>
    );
}
