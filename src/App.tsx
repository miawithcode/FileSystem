import { DocumentIcon, FolderIcon } from "@heroicons/react/24/solid";
import { type Node } from "./lib/types";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const nodes: Node[] = [
  {
    label: "Home",
    nodes: [
      {
        label: "Movies",
        nodes: [
          {
            label: "Action",
            nodes: [
              {
                label: "2000s",
                nodes: [{ label: "Gladiator.mp4" }],
              },
              { label: "2010s", nodes: [] },
            ],
          },
          { label: "Comedy", nodes: [{ label: "2000s", nodes: [] }] },
        ],
      },
      {
        label: "Musics",
        nodes: [
          { label: "Rock", nodes: [] },
          { label: "Classical", nodes: [] },
        ],
      },
      { label: "Pictures", nodes: [] },
      { label: "Documents", nodes: [] },
      { label: "password.txt" },
    ],
  },
];

const App = () => {
  return (
    <div className="mx-auto max-w-sm p-8">
      <ul className="pl-6">
        {nodes.map((node) => (
          <FileSystemItem node={node} key={node.label} />
        ))}
      </ul>
    </div>
  );
};
export default App;

type FileSystemItemProps = {
  node: Node;
};

const FileSystemItem = ({ node }: FileSystemItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => [setIsOpen((prev) => !prev)];

  return (
    <li className="my-1.5" key={node.label}>
      <span className="flex items-center gap-1.5">
        {node.nodes && node.nodes.length > 0 && (
          <button onClick={handleClick}>
            <ChevronRightIcon
              className={`size-4 text-gray-500 ${isOpen && "rotate-90"}`}
            />
          </button>
        )}
        {node.nodes ? (
          <FolderIcon
            className={`size-6 text-sky-500 ${!(node.nodes.length > 0) && "ml-[22px]"}`}
          />
        ) : (
          <DocumentIcon className="ml-[22px] size-6 text-gray-900" />
        )}
        {node.label}
      </span>

      {isOpen && (
        <ul className="pl-6">
          {node.nodes?.map((node) => (
            <FileSystemItem node={node} key={node.label} />
          ))}
        </ul>
      )}
    </li>
  );
};
