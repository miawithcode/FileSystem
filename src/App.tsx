import { FolderIcon } from "@heroicons/react/24/solid";

const folders = ["Movies", "Musics", "Pictures", "Documents"];

const App = () => {
  return (
    <div className="mx-auto max-w-sm p-8">
      <ul>
        <li className="my-1.5">
          <span className="flex items-center gap-1.5">
            <FolderIcon className="size-6 text-sky-500" />
            Home
          </span>

          <ul className="pl-6">
            {folders.map((folder) => (
              <li className="my-1.5" key={folder}>
                <span className="flex items-center gap-1.5">
                  <FolderIcon className="size-6 text-sky-500" />
                  {folder}
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default App;
