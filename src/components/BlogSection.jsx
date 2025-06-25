import React from 'react';
import analysisImg from '../assets/analysis.png';
import fortknoxImg from '../assets/fortknox.png';
import zenocideImg from '../assets/zenocide.png';

const blogs = [
  {
    date: 'Nov 9, 2023',
    title: 'How UX works in web',
    tags: ['UI', 'UX'],
    image: analysisImg,
  },
  {
    date: 'Aug 18, 2023',
    title: 'Case study - Analysis Application.',
    tags: ['DESIGN', 'PRINT'],
    image: fortknoxImg,
  },
  {
    date: 'Feb 16, 2023',
    title: '3 ways to develop your skill',
    tags: ['FIGMA', 'WEB'],
    image: zenocideImg,
  },
];

const Blog = () => {
  return (
    <section className="blog-section py-5 px-3 min-vh-100">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="blog-title">✴ Blog</h2>
          <a href="#" className="text-white text-decoration-underline">view all</a>
        </div>

        <div className="row gy-4">
          {blogs.map((blog, index) => (
            <div key={index} className="col-12">
              <div className="blog-card">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <div className="blog-meta">
                  <small className="blog-date">{blog.date}</small>
                  <h5 className="blog-heading">{blog.title}</h5>
                  <div className="blog-tags">
                    {blog.tags.map((tag, i) => (
                      <span key={i} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <button className="read-button">Read</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
