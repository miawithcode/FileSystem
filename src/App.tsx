import { FolderIcon } from "@heroicons/react/24/solid";

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
            <li className="my-1.5">
              <span className="flex items-center gap-1.5">
                <FolderIcon className="size-6 text-sky-500" />
                Movies
              </span>
            </li>
            <li className="my-1.5">
              <span className="flex items-center gap-1.5">
                <FolderIcon className="size-6 text-sky-500" />
                Music
              </span>
            </li>
            <li className="my-1.5">
              <span className="flex items-center gap-1.5">
                <FolderIcon className="size-6 text-sky-500" />
                Pictures
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default App;
