
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col p-4 gap-2 text-center">
        <div className="text-left">
          <h2 className="text-xl font-semibold text-red-500 mb-2"> Why use this?</h2>
         
          <ol className="list-disc pl-5 text-neutral-600">
            <li>This repository and guide is made to simplify using Tailwind with react for different components</li>
            <li>Built with Tailwind CSS for seamless integration.</li>
            <li>Using this, you can simply copy paste use every component effectively within seconds.</li>
          </ol>
        </div>
        <div className="mt-4">
          <Link
            to={"/components"}
            className="bg-red-500 hover:bg-red-800 text-cyan-50 w-fit rounded self-center px-4 py-2"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;