import { useState } from "react";
import { Tab } from "@headlessui/react";
import { rolesHR, rolesDeveloper, rolesSales } from "../db/roles";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = () => {
  let [categories] = useState({
    HR: rolesHR,
    Developers: rolesDeveloper,
    Sales: rolesSales,
  });

  return (
    <div className="w-auto px-2 py-10 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex flex-col sm:flex-row p-1 mx-28 space-x-1 bg-gray-500 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "tab",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        {/* _____________________ */}

        <Tab.Panels className="mt-5 px-5">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}
            >
              <ul className="px-5  flex-wrap">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative m-5 shadow-sm hover:shadow-lg hover:bg-gray-100 transition duration-300 hover:scale-105 transform ease-in-out flex-col md:flex-row justify-between p-3 rounded-md hover:bg-coolGray-100 cursor-pointer"
                  >
                    <div>
                      <h3 className="text-sm font-medium leading-5">
                        {post.first_name} {post.last_name}
                      </h3>

                      <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                        <li>
                          <em>Role:</em> {post.role}
                        </li>
                        <li>&middot;</li>
                        <li>
                          <em>Primary Contact:</em> {post.contact_no}
                        </li>
                        <li>&middot;</li>
                      </ul>
                    </div>

                    <div className=" flex gap-10 mt-5 ">
                      <Link to="/new-entry">
                        <button
                          onClick={(e) => console.log(post)}
                          className="bg-lime-500 text-white font-semibold px-3 py-2 rounded-lg"
                        >
                          Edit
                        </button>
                      </Link>

                      <button className="bg-pink-500 text-white font-semibold px-3 py-2 rounded-lg">
                        Delete
                      </button>
                    </div>

                    {/* <a
                      href="/"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "focus:z-10 focus:outline-none focus:ring-2 ring-blue-400"
                      )}
                    /> */}
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
