export default function BlockInspector({ block, onUpdate }) {
    
    if (!block) return <p className="text-gray-400">Select a block</p>;

    const updateContent = (patch) =>
        onUpdate(block.id, { content: patch });

    return (
        <div className="mb-6">
            <h3 className="font-bold mb-3">Content — {block.type}</h3>

            {block.type === "heading" && (
                <input
                    className="w-full border p-2 rounded"
                    value={block.content.text || ""}
                    onChange={(e) => updateContent({ text: e.target.value })}
                    placeholder="Heading text"
                />
            )}

            {block.type === "link" && (
                <>
                    <input
                        className="w-full border p-2 rounded mb-2"
                        value={block.content.title || ""}
                        placeholder="Button text"
                        onChange={(e) => updateContent({ title: e.target.value })}
                    />
                    <input
                        className="w-full border p-2 rounded"
                        value={block.content.url || ""}
                        placeholder="URL"
                        onChange={(e) => updateContent({ url: e.target.value })}
                    />
                </>
            )}

            {block.type === "media" && (
                <input
                    className="w-full border p-2 rounded"
                    value={block.content.src || ""}
                    placeholder="Image URL"
                    onChange={(e) => updateContent({ src: e.target.value })}
                />
            )}

            {block.type === "folder" && (
                <input
                    className="w-full border p-2 rounded"
                    value={block.content.title || ""}
                    placeholder="Folder title"
                    onChange={(e) => updateContent({ title: e.target.value })}
                />
            )}

            {block.type === "mediaLink" && (
                <div className="space-y-4">

                    <h3 className="font-semibold">Media Link Settings</h3>

                    {/* Upload Image */}
                    <div>
                        <label className="text-sm font-semibold">Upload Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (!file) return;

                                const reader = new FileReader();
                                reader.onload = () => {
                                    onUpdate(block.id, {
                                        content: {
                                            src: reader.result,
                                            provider: "image"
                                        }
                                    });
                                };

                                reader.readAsDataURL(file);
                            }}
                        />
                    </div>

                    {/* Paste YouTube / Vimeo / MP4 */}
                    <div>
                        <label className="text-sm font-semibold">Video URL</label>
                        <input
                            type="text"
                            placeholder="Paste YouTube / Vimeo / MP4 link"
                            value={block.content?.src || ""}
                            onChange={(e) => {
                                const url = e.target.value;
                                onUpdate(block.id, {
                                    content: {
                                        src: url
                                    }
                                });
                            }}
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    {/* CTA Link */}
                    <div>
                        <label className="text-sm font-semibold">Redirect URL (Optional)</label>
                        <input
                            type="text"
                            value={block.content?.url || ""}
                            onChange={(e) =>
                                onUpdate(block.id, {
                                    content: { url: e.target.value }
                                })
                            }
                            className="w-full border p-2 rounded"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
