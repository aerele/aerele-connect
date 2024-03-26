import React, { useEffect, useState } from 'react';
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import { Button, Avatar } from "@mui/material";
import "./MainBar.css";
import Post from "../Post/Post";
import { useFrappeCreateDoc, useFrappeGetDocList, useFrappeFileUpload, useFrappeUpdateDoc } from 'frappe-react-sdk';

export const MainBar = () => {
//Creating a doc using useFrappeCreateDoc hook
  const { createDoc:createPost, error:errorAddingMembers, isCompleted:isPostCreated } = useFrappeCreateDoc()
//Upload file to the respective created doc
  const {upload:uploadFile,progress:uploadProgress,isCompleted:isUploadCompleted} = useFrappeFileUpload()
//Update doc
  const{updateDoc:updatePost,isCompleted:isUpdatingCompleted, error:updateError, loading:isUpdateDocLoading} = useFrappeUpdateDoc()

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null)
  const [inputValue, setInputValue] = useState('');
  const [posts, setPosts] = useState([]);

  //Creating a doc using useFrappeGetDocList hook
  const { data, isLoading, error, mutate:refetch_data } = useFrappeGetDocList("Posts", {
    fields: ["name", "username", "image", "description", "likes", "creation", "comments"],
    orderBy: {
        field: 'creation',
        order: "desc"
    }
  })

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  const handlePostUpdate = (postId,likes) => {
    updatePost("Posts",postId,{
    "likes":likes + 1
    }).then((r)=> {
      console.log("Post Updated Succesfully",r);
      refetch_data()
    }).catch(e => console.log("error on updating Post",e))
  }
  // const [posts, setPosts] = useState(Array.from({ length: 15 }, (_, i) => ({
  //   id: i,
  //   profileName: `User ${i + 1}`,
  //   profileImage: `https://via.placeholder.com/50?text=User${i + 1}`,
  //   imageUrl: `https://via.placeholder.com/400?text=Post${i + 1}`,
  //   caption: `This is post number ${i + 1} with a quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."`,
  // })));

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPost = () => {
    if (!inputValue && !selectedImage) return;
    const fileArgs = {
      "isPrivate": false,
      // "doctype": "Posts",
      // "docname": doc.name,
      "fieldname" : "image"
    }
    if (selectedImage)
        uploadFile(
          selectedFile,
          fileArgs
          /** Progress Indicator callback function **/
          // (completedBytes, totalBytes) => console.log(Math.round((c / t) * 100), " completed")
      )
      .then((r) => {
      console.log("File Upload complete", r)
      createPost("Posts",{
        "user":"kavin@aerele.in",
        "description":inputValue,
        "image":r.file_url
      }).then((doc)=>{
        console.log("doc",doc);
        refetch_data()
      })
      })
      .catch((e) => {
      console.error(e)
      })
    // setPosts([newPost, ...posts]);
    setSelectedImage(null);
    setInputValue('');
  };

  return (
    <>
      <div className="container">
        <div className="add-post-box w-100 d-flex flex-row gap-2">
          <div className="circle float-start">
            {/* <CircleOutlinedIcon sx={{ fontSize: 60 }} color="primary" /> */}
            <Avatar sx={{ width: 50, height: 50, marginTop: 2 }} />
          </div>
          <div className="w-100">
            <div className="input-box d-block border border-top-0 border-start-0 border-end-0">
              <input
                type="text"
                className="border-0 bg-dark w-100"
                style={{ height: "4rem" }}
                id="floatingInput"
                placeholder="What's Happening?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div className="image-box mt-2 p-2">
              {selectedImage && (
                <>
                  <button className="remove-image-btn btn btn-danger float-end top-0 end-0" onClick={() => setSelectedImage(null)}>
                    x
                  </button>
                  <img src={selectedImage} alt="Selected" style={{objectFit:'none', width:'50%', height:'400px'}} />
                </>
              )}
            </div>
            <div className="attach-list mt-2 d-flex justify-content-between">
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item bg-dark text-light border-0">
                  <label htmlFor="file-input">
                    <PermMediaOutlinedIcon />
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </li>
                <li className="list-group-item bg-dark text-light border-0">
                  <EmojiEmotionsOutlinedIcon />
                </li>
                <li className="list-group-item bg-dark text-light border-0">
                  <PollOutlinedIcon />
                </li>
                <li className="list-group-item bg-dark text-light border-0">
                  <GifBoxOutlinedIcon />
                </li>
              </ul>
              <Button
                sx={{ fontWeight: "bold", display: "flex", borderRadius: 50 }}
                variant="contained"
                endIcon={<AddCircleOutlinedIcon />}
                onClick={handleAddPost}
              >
                Add Post
              </Button>
            </div>
          </div>
        </div>
        <div className="post-box mt-4 bg-dark" style={{ overflowY: 'scroll' }}>
          {posts.map(post => (
            <Post
              key={post.name}
              id={post.name}
              imageUrl={post.image}
              profileName={post.username}
              // profileImage={post.profileImage}
              caption={post.description}
              likeCount={post.likes}
              updatePost = {handlePostUpdate}
            />
          ))}
        </div>
      </div>
    </>
  );
};
