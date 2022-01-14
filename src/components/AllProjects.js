// src/components/AllProjects.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../blog_client.js";


export default function AllProjects() {
  const [allProjectsData, setAllProjects] = useState(null);
  
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        slug,
        mainImage{
        asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllProjects(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-slate-400 min-h-screen p-12">
      <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center cursive">Projects</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page!
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjectsData &&
            allProjectsData.map((project, index) => (
              <Link to={"/projects/" + project.slug.current} key={project.slug.current}>
                <span
                  className="block h-64 relative rounded shadow leading-snug bg-white
                      border-l-8 border-slate-700"
                  key={index}
                >
                  <img
                    className="w-full h-full rounded-r object-cover absolute"
                    src={project.mainImage.asset.url}
                    alt=""
                  />
                  <span
                    className="block relative h-full flex justify-end items-end pr
                      -4 pb-4"
                  >
                    <h2
                      className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700
                        text-red-100 bg-opacity-75 rounded"
                    >
                      {project.title}
                    </h2>
                  </span>
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}