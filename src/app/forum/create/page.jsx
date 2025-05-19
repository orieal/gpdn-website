"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from 'antd';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import logo from '../../assets/registation/logo.png';
import { MdDashboard } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa6";
import { TbUsers } from "react-icons/tb";
import { PiBuildings } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-b p-2 flex gap-2 flex-wrap">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded ${editor.isActive('bold') ? 'bg-gray-200' : ''}`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded ${editor.isActive('italic') ? 'bg-gray-200' : ''}`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-2 rounded ${editor.isActive('strike') ? 'bg-gray-200' : ''}`}
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`p-2 rounded ${editor.isActive('paragraph') ? 'bg-gray-200' : ''}`}
      >
        Paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''}`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''}`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-gray-200' : ''}`}
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded ${editor.isActive('orderedList') ? 'bg-gray-200' : ''}`}
      >
        Ordered List
      </button>
    </div>
  );
};

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDescription(html);
    }
  });

  const [description, setDescription] = useState('');

  const sidebarMenus = [
    {menu: 'Forum', icon: <MdDashboard/>},
    {menu: 'Resource Library', icon: <FaRegFolder/>},
    {menu: 'Members', icon: <TbUsers/>},
    {menu: 'Palliative Units', icon: <PiBuildings/>},
    {menu: 'News & Blogs', icon: <IoNewspaperOutline/>},
    {menu: 'Settings', icon: <MdOutlineSettings/>}
  ];

  const availableTags = [
    'AI/ML', 'Crime', 'Fitness', 'Diet', 'Machine Learning', 'Healthcare', 'Finance', 'Banking'
  ];

  const handleTagSelect = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeTag = (tagToRemove) => {
    setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 fixed h-screen overflow-y-auto">
        <div className="p-5">
          <Image alt="" src={logo} width={100}/>
        </div>
        
        <nav className="mt-5">
          {sidebarMenus.map((item, index) => (
            <div key={index} className="cursor-pointer hover:bg-[#00A99D] hover:text-white duration-300 flex items-center gap-5 px-5 py-3">
              <h1 className="text-xl">{item.icon}</h1>
              <h1>{item.menu}</h1>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="p-5 border-b border-gray-200">
          <h1 className="text-xl font-semibold">Create Post</h1>
        </div>

        <div className="p-5 max-w-4xl">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Title</label>
            <div className="relative">
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                suffix={<MdEdit className="text-gray-400" />}
                className="pr-10"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Upload Thumbnail</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p className="text-sm text-blue-500 cursor-pointer">Click here</p>
                <p className="text-xs text-gray-500">to upload your file or drag.</p>
                <p className="text-xs text-gray-400 mt-2">Supported Format: SVG, PNG, JPEG (max 800x400px)</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Description</label>
            <div className="border rounded-lg overflow-hidden">
              <MenuBar editor={editor} />
              <div className="min-h-[200px] p-4">
                <EditorContent editor={editor} />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium">Tags</label>
              <button 
                onClick={() => setSelectedTags([])}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Clear All
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-1"
                >
                  {tag}
                  <IoClose
                    className="cursor-pointer"
                    onClick={() => removeTag(tag)}
                  />
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <span
                  key={tag}
                  onClick={() => handleTagSelect(tag)}
                  className="px-3 py-1 bg-gray-50 rounded-full text-sm cursor-pointer hover:bg-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button className="px-4 py-2 bg-[#00A99D] text-white rounded-md hover:bg-[#008F84]">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;