import { DocumentIcon, FolderIcon } from "@heroicons/react/24/solid";
import { type TFolder } from "./lib/types";

const folders: TFolder[] = [
  {
    label: "Home",
    folders: [
      {
        label: "Movies",
        folders: [
          {
            label: "Action",
            folders: [
              {
                label: "2000s",
                folders: [
                  { label: "Gladiator.mp4" },
                  { label: "American-beauty.mp4" },
                ],
              },
              { label: "2010s", folders: [] },
            ],
          },
          { label: "Comedy", folders: [{ label: "2000s", folders: [] }] },
        ],
      },
      {
        label: "Musics",
        folders: [
          { label: "Rock", folders: [] },
          { label: "Classical", folders: [] },
        ],
      },
      { label: "Pictures", folders: [] },
      { label: "Documents", folders: [] },
      { label: "password.txt" },
    ],
  },
];

const App = () => {
  return (
    <div className="mx-auto max-w-sm p-8">
      <ul className="pl-6">
        {folders.map((folder) => (
          <Folder folder={folder} key={folder.label} />
        ))}
      </ul>
    </div>
  );
};
export default App;

type FolderProps = {
  folder: TFolder;
};

const Folder = ({ folder }: FolderProps) => {
  return (
    <li className="my-1.5" key={folder.label}>
      <span className="flex items-center gap-1.5">
        {folder.folders ? (
          <FolderIcon className="size-6 text-sky-500" />
        ) : (
          <DocumentIcon className="size-6 text-gray-900" />
        )}
        {folder.label}
      </span>

      <ul className="pl-6">
        {folder.folders?.map((folder) => (
          <Folder folder={folder} key={folder.label} />
        ))}
      </ul>
    </li>
  );
};
