import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Choice in Hackney",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Tymon Rybak",
      image: "/images/blog/author-01.png",
      designation: "Co-Founder",
    },
    tags: ["accessibility"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Second Tree",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Maria Rosello",
      image: "/images/blog/author-01.png",
      designation: "Co-Founder",
    },
    tags: ["wordpress"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "WILPF",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Julia Schinle",
      image: "/images/blog/author-01.png",
      designation: "Co-Founder",
    },
    tags: ["wordpress"],
    publishDate: "2025",
  },
  {
    id: 4,
    title: "The Survivor Project",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Julia Schinle",
      image: "/images/blog/author-01.png",
      designation: "Co-Founder",
    },
    tags: ["wordpress"],
    publishDate: "2025",
  },
];
export default blogData;
