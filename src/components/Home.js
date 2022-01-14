import React, { useEffect, useState } from "react";
import sanityClient from "../blog_client.js";
import BlockContent from "@sanity/block-content-to-react";
export default function Home(){
  const [bio, setBio] = useState(null);
  const serializers = {
    types: {
      block(props) {
        switch (props.node.style) {
          case 'br':
            return <br/>
          default:
            return <p>{props.children}</p>
        }
      }
    }
  }

  useEffect(()=>{
    sanityClient
      .fetch(
        `*[_type == "author" && name == "Will Haynes"]{
          name,
          bio
        }`
    ).then((data) => {
     
      setBio(data[0])
    })
      
    .catch(console.error);
    }, []);

    if (!bio) return <div>Loading...</div>;

    return(

      <div 
        className="bg-slate-400 min-w-screen overflow-hidden grid md:grid-cols-1 lg:grid-cols-2">
        <img 
          src="profile.jpg" 
          className="rounded-full mx-auto mt-16 max-h-128">
        </img>
        <div 
          className="px-16 lg:pr-48 py-12  min-h-screen lg:py-20 prose prose-2xl overflow-hidden">
            <BlockContent
            className="overflow-hidden"
            blocks={bio.bio}
            serializers={serializers}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    )
    
}