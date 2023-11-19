import { Link } from "react-router-dom";
import { componentsData } from "../data/componentsData";

function ComponentsPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="font-bold text-red-500 text-3xl">Components</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12">
        {componentsData.map((component) => (
          <Link
            to={component.urlSlug}
            key={component.id}
            className="hover:bg-red-800 bg-red-500 text-cyan-50 px-4 py-2 text-lg rounded font-semibold text-center"
          >
            {component.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ComponentsPage;