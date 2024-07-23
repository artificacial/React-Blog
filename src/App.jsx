import React, { useState, useEffect } from "react";
import Header from "./components/Menu/Header";
import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import PostItem from "./components/posts/PostItem";
import TagList from "./components/posts/TagList";
import { getPexelsImages } from "./utils/getPexelsImages";

const initialPosts = [
  {
    title: "Sample Post 1",
    url: "/post/1",
    description: "This is a sample post description for post 1.",
    pubDate: "2023-03-16",
    author: "John Doe",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Sample Post 2",
    url: "/post/2",
    description: "This is a sample post description for post 2.",
    pubDate: "2023-03-17",
    author: "Jane Smith",
    tags: ["REACT", "TAILWINDCSS"],
  },
  {
    title: "Sample Post 3",
    url: "/post/3",
    description: "This is a sample post description for post 3.",
    pubDate: "2023-03-18",
    author: "Jim Brown",
    tags: ["HTML", "TAILWINDCSS"],
  },
  {
    title: "Sample Post 4",
    url: "/post/4",
    description: "This is a sample post description for post 4.",
    pubDate: "2023-03-19",
    author: "Emily White",
    tags: ["REACT", "FLEXBOX"],
  },
  {
    title: "Sample Post 5",
    url: "/post/5",
    description: "This is a sample post description for post 5.",
    pubDate: "2023-03-20",
    author: "Michael Green",
    tags: ["HTML", "FLEXBOX"],
  },
  {
    title: "Sample Post 6",
    url: "/post/6",
    description: "This is a sample post description for post 6.",
    pubDate: "2023-03-21",
    author: "Sara Blue",
    tags: ["CSS", "TAILWINDCSS"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    const fetchImages = async () => {
      const images = await getPexelsImages("nature"); // Cambia 'nature' a la categoría que prefieras
      const updatedPosts = initialPosts.map((post, index) => ({
        ...post,
        image: images[index % images.length], // Asegurarse de que siempre haya una imagen disponible
      }));
      setPosts(updatedPosts);
    };
    fetchImages();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  const allTags = [...new Set(posts.flatMap((post) => post.tags))];

  return (
    <div>
      <Header toggleMenu={toggleMenu} isMenuOpen={menuOpen} />
      <Menu isOpen={menuOpen} />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <TagList tags={allTags} onTagClick={handleTagClick} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <PostItem key={index} {...post} />
          ))}
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
