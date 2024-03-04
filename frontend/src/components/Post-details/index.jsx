/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";
import Blog1Data from "../../data/blog1.json";

import Feb162024 from "../Posts/Feb162024";
import Feb152024 from "../Posts/Feb152024";

const PostDetails = ({ post }) => {
  const currentIndex = Blog1Data.findIndex((item) => item.id === post.id);
  const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : null;
  const nextIndex = currentIndex + 1 < Blog1Data.length ? currentIndex + 1 : null;
  const prevLink = prevIndex !== null ? `/blogs/${Blog1Data[prevIndex].slug}` : "#";
  const nextLink = nextIndex !== null ? `/blogs/${Blog1Data[nextIndex].slug}` : "#";

  const { id } = post;

  const postComponents = {
    1: <Feb162024 />,
    2: <Feb152024 />
  };

  const SelectedPostComponent = postComponents[id] || (() => <div>post not found</div>);
  
  console.log("post.slug:", id);

  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

    return (
      <>
        <section className="blog-pg single section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <div className="post">
                  <div className="title-head">
                    <h2>{post.title}</h2>
                    <div className="info">
                      <p>
                        <a>{post.by}</a>,
                        <a>{post.date}</a>,
                        <a>{post.tag[0]}</a>
                      </p>
                    </div>
                  </div>

                  <div className="img main-img">
                    <img
                      src={post.image}
                      alt=""
                    />
                  </div>
                  {/* className="thumparallax" */}
                  
                  <div className="content pt-20">
                    <div className="row justify-content-center">
                      <div className="col-lg-10">
                        <div className="cont">
                          {SelectedPostComponent}

                          <div className="share-info">
                            <div className="tags">
                              <a>{post.tag[0]}</a>,
                              <a>{post.tag[1]}</a>,
                              <a>{post.tag[2]}</a>
                            </div>
                          </div>
                        </div>

                        <div className="author">
                          <div className="author-img">
                            <img src="/assets/img/posts/Feb16/club.png" alt="" />
                          </div>
                          <div className="info">
                            <h6>
                              <span>author :</span> Jorden Griffin
                            </h6>
                            <p className="p1">
                              The main component of a healthy environment for self
                              esteem is that it needs be nurturing. The main
                              compont of a healthy environment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pagination">
                    <span>
                      <Link href={prevLink}>Prev Post</Link>
                    </span>
                    <span className="icon">
                      <Link href="/blogs">
                        <a>
                          <i className="fas fa-th-large"></i>
                        </a>
                      </Link>
                    </span>
                    <span className="text-right">
                      <Link href={nextLink}>Next Post</Link>
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

export default PostDetails;
