/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Blog1Data from "../../data/blog1.json";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

const BlogsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = Blog1Data.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(Blog1Data.length / blogsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when currentPage changes
  }, [currentPage]);

  return (
    <>
      <section className="blog-pg section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="posts">
                {currentBlogs.map((item) => (
                  <div className="item mb-80" key={item.id}>
                    <div className="img">
                      <Link href="/blogs/[slug]" as={`/blogs/${item.slug}`}>
                        <a>
                          <img
                            src={item.image}
                            alt=""
                            className="thumparallax"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="content">
                      <div className="date">
                        <h5>
                          <Link href="/blogs/[slug]" as={`/blogs/${item.slug}`}>
                            <a>
                              <span className="num">{item.date2[1]}</span>
                              <span>{item.date2[0]}</span>
                            </a>
                          </Link>
                        </h5>
                      </div>
                      <div className="cont">
                        <div className="tags">
                          <Link href="#">{item.tag[0]}</Link>
                          <Link href="#">{item.tag[1]}</Link>
                          <Link href="#">{item.tag[2]}</Link>
                        </div>
                        <h4 className="title">
                          <Link href="/blogs/[slug]" as={`/blogs/${item.slug}`}>{item.title}</Link>
                        </h4>
                        <p>{item.abstract}</p>
                        <Link href="/blogs/[slug]" as={`/blogs/${item.slug}`}>
                          <a className="more">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pagination">
                  <span onClick={handlePrevPage}>
                    {currentPage > 1 && (
                      <Link href="#">
                        <a>
                          <i className="fas fa-angle-left"></i>
                        </a>
                      </Link>
                    )}
                  </span>
                  {[...Array(totalPages).keys()].map((num) => (
                    <span
                      key={num + 1}
                      className={currentPage === num + 1 ? "active" : ""}
                    >
                      <Link href="#">
                        <a onClick={() => setCurrentPage(num + 1)}>{num + 1}</a>
                      </Link>
                    </span>
                  ))}
                  <span onClick={handleNextPage}>
                    {currentPage < totalPages && (
                      <Link href="#">
                        <a>
                          <i className="fas fa-angle-right"></i>
                        </a>
                      </Link>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsList;
