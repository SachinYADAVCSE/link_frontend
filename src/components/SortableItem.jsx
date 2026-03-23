import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FiMove } from "react-icons/fi";

// this is layer 3
export default function SortableItem({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : "auto",
  };

  return (
    <div ref={setNodeRef} style={style} className={`${isDragging ? 'dragging' : ''}`}>
      <div className="flex items-start gap-3">
        <div {...attributes} {...listeners} className="p-2 bg-gray-50 rounded cursor-grab">
          <FiMove />
        </div>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
