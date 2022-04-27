import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedUser } from "../features/user/SelectedUserSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = () => {
  // let [categories] = useState({
  //   HR: rolesHR,
  //   Developers: rolesDeveloper,
  //   Sales: rolesSales,
  // });

  const userData = useSelector((state) => state.userData);
  const [userJSONData, setUserJSONData] = useState(userData);

  const dispatch = useDispatch();
  return (
    <div className="w-auto   py-10 sm:px-0">
      <Tab.Group>
        {/* _____________________ TAB MENUS */}

        <Tab.List className="flex justify-center mx-5  p-1  space-x-1 dark:bg-gray-800 bg-teal-200  text-white rounded-xl">
          {Object.keys(userJSONData).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "tab transition duration-500 ease-in-out",
                  selected
                    ? "bg-white dark:bg-teal-600 text-teal-200 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-teal-100"
                )
              }
            >
              {category.toUpperCase()}
            </Tab>
          ))}
        </Tab.List>

        {/* _____________________ TAB PANELS */}

        <Tab.Panels className="mt-5 mx-5 px-5">
          {Object.values(userJSONData).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "bg-white rounded-xl",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}
            >
              <ul className="  flex-wrap dark:bg-gray-700 bg-teal-50">
                {posts.map((post) => (
                  <Link
                    onClick={() => dispatch(getSelectedUser(post))}
                    to={`/user/${post.id}`}
                  >
                    <li
                      key={post.id}
                      className="relative my-5 shadow-sm hover:shadow-lg hover:bg-gray-100 transition duration-300 hover:scale-105 transform ease-in-out flex-col flex md:flex-row  justify-between px-3  py-3 rounded-md hover:bg-coolGray-100 cursor-pointer dark:bg-gray-800 dark:text-gray-50 "
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
                        <button className="px-3 py-2 rounded-lg bg-teal-500 text-white mb-4 hover:bg-teal-700 transition ease-in-out duration-150">
                          View Details
                        </button>
                      </div>
                    </li>
                  </Link>
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
