import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js"; // Import the crypto-js library

const AddNews = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

 

  const encryptContent = (content, encryptionMethod) => {
    let key, iv;
    switch (encryptionMethod) {
      case "aes":
        key = process.env.REACT_APP_AES_KEY;
        iv = process.env.REACT_APP_AES_IV;
        break;
      case "des":
        key = process.env.REACT_APP_DES_KEY;
        iv = key.substring(0, 8);
        break;
      case "rc4":
        key = process.env.REACT_APP_RC4_KEY;
        break;
      default:
        throw new Error("Invalid encryption method");
    }
    
    const algorithm = encryptionMethod === 'rc4' ? 'RC4' : 'AES'; // RC4 doesn't have a specific function in CryptoJS
    
    const encryptedContent = CryptoJS[algorithm].encrypt(
      content,
      key,
      { iv: CryptoJS.enc.Hex.parse(iv) }
    ).toString();
    

    return encryptedContent;
  };

  const saveNews = async (e) => {
    e.preventDefault();
    try {
      const encryptedContent = encryptContent(content, "aes"); // Replace with the selected encryption method
      // ... (other code)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center mt-5">
      <div className="container bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={saveNews}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Author
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Caption
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Caption"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Content
            </label>
            <div className="control">
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                rows="5"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Save
            </button>
            <Link
              to={`/`}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Go Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
