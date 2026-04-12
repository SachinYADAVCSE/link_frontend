import { useState } from 'react'

export function FolderItem({ block, children }) {
    const [open, setOpen] = useState(true);
    const styles = block.styles || {};

    return (
        <div
            style={{
                backgroundColor: styles.backgroundColor,
                color: styles.color,
                borderRadius: styles.borderRadius,
                padding: styles.padding,
                border: styles.borderWidth
                    ? `${styles.borderWidth}px solid ${styles.borderColor || "#000"}`
                    : undefined
            }}
        >
            <button
                className="flex justify-between w-full px-4 py-3 font-bold cursor-pointer"
                onClick={() => setOpen(o => !o)}
                style={{
                    fontSize: styles.fontSize
                }}
            >
                {block.content?.title || "Folder"}
                <span>{open ? "⌄" : "⌃"}</span>
            </button>

            {open && (
                <div className="p-4 space-y-3">
                    <hr></hr>
                    {children}
                </div>
            
            )}
        </div>
    );
}
