import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function SimpleFooter() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 p-6 text-center md:justify-between bg-green-800">
      <Typography color="white" className="font-normal">
        &copy; 2023 Finanzas PYMES
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link to="/about">
          <Typography
            as="a"
            color="white"
            className="font-normal transition-colors hover:text-gray-500 focus:text-gray-500"
          >
            About Us
          </Typography>
          </Link>
        </li>
        <li>
          <Typography
            as="a"
            href=""
            color="white"
            className="font-normal transition-colors hover:text-gray-500 focus:text-gray-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-gray-500 focus:text-gray-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}
