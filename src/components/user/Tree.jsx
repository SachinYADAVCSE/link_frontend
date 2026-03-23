import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import { GrView } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";
import { GrEdit } from "react-icons/gr";

const Tree = () => {
  const [storedUser, setStoredUser] = useState(null);
  const [token, setToken] = useState("");
  const location = useLocation();
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    try {
      const data = localStorage.getItem("userInfo");
      const jwt = localStorage.getItem("token");

      setStoredUser(data ? JSON.parse(data) : null);
      setToken(jwt || "");
    } catch {
      console.log("Difficulty in fetching required data");
    }
  }, [location.pathname]);

  const fetchData = async () => {
    if (!token) return;

    try {
      const response = await axios.get(
        "http://localhost:4000/api/links/pages",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      setPageData(response.data);
      console.log(response.data, "This is the Page Data that is been coming.");
      
    } catch (err) {
      console.log(err, "Not able to make request");
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  return (
    <div className="p-6 mt-6">

      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Pages</h1>

        <Link
          to="/user-onboarding"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          + Create New Page
        </Link>
      </div>

      {/* Page List */}
      <div className="flex flex-col gap-4">
        {pageData.map((page) => (
          <div
            key={page._id}
            className="w-full bg-blue-100 rounded-md flex px-6 py-4 justify-between items-center shadow"
          >
            <div>
              <p className="font-semibold text-lg">{page.title}</p>
              <p className="text-sm text-gray-500">
                {new Date(page.createdAt).toLocaleDateString()}
              </p>
            </div>

            <span className="flex items-center gap-4">

              {/* View */}
              <Link to={`/${page.url}`}>
                <GrView className="text-[32px] text-slate-500 border rounded-md p-2 hover:bg-gray-200" />
              </Link>

              {/* Analytics */}
              <SiGoogleanalytics className="text-[32px] text-slate-500 border rounded-md p-2 hover:bg-gray-200 cursor-pointer" />

              {/* Edit */}
              <Link to={`/user-custom-builder/${page._id}`}>
                <GrEdit className="text-[32px] text-slate-500 border rounded-md p-2 hover:bg-gray-200" />
              </Link>

              <p className={`font-medium ${page.isPublished ? "text-green-600" : "text-red-600"}`}>
                {page.isPublished ? "Published" : "Draft"}
              </p>

            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tree;