/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";
import { useRouter } from "next/router"; // 导入 useRouter
import Blog1Data from "../../data/blog1.json";

const PostDetails = ({ post }) => {
  const currentIndex = Blog1Data.findIndex((item) => item.id === post.id);
  const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : null;
  const nextIndex = currentIndex + 1 < Blog1Data.length ? currentIndex + 1 : null;
  const prevLink = prevIndex !== null ? `/blogs/${Blog1Data[prevIndex].slug}` : "#";
  const nextLink = nextIndex !== null ? `/blogs/${Blog1Data[nextIndex].slug}` : "#";

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
                    className="thumparallax"
                  />
                </div>

                <div className="content pt-20">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                        <div className="spacial">
                          <p>
                            判定个体的人格类型时，做人格测试常常被认为是一种便捷的方式。<br />
                            然而，从拉康（Jacques Lacan）精神分析的角度来看，这种方法存在一定的局限性，并很有可能对真正的人格进行误判。
                          </p>
                        </div>

                        <p className="p1">
                          这是因为测试题所指涉的认知过程发生在<strong>象征界</strong>（The Imaginary），而真正的认知过程则发生在<strong>实在界</strong>（The Real）—— <br />
                          导致测试题在判定人格类型时发生了一系列认知过程由于被<strong>象征化</strong>（Fort/Da）而被扭曲过程。
                        </p>

                        <img src={require("/assets/img/posts/Feb16/RJS.png")} alt="" />
                        <p className="p1">
                          在拉康精神分析中，<strong>实界</strong>
                          是指直接、无中介的现实世界，而<strong>象征界</strong>
                          是指经过符号和象征的中介，存在于语言和文化的层面。<br /><br />
                          具体而言，通过测试题或功能定义的纯粹语言意涵来判定人格类型的过程可以被概括为：
                          <br />
                          <ul>
                            <li>
                              <span>·</span> 被判型者在实在界产生认知过程的“真理” ➡️
                            </li>
                            <li>
                              <span>·</span> 测试题将认知过程的“真理”象征化 ➡️ <br />
                            </li>
                            <li>
                              <span>·</span> 测试题在象征化基础上得到一个被判型者被象征化的“类型”。<br />
                            </li>

                          </ul>
                          所以说，通过测试题的语言象征化所得到的类型，并不是实在界真理的类型，而实在界的真理类型只能通过非象征化的直接意向（Intend）来获得。<br />
                          在这里，实在界代表了对认知过程真实的、直接的体验，而象征界则是通过测试题语言的符号和象征对真实认知过程进行“阉割”（Castration）的层面。
                        </p>

                        <img src={require("/assets/img/posts/Feb16/abstract.png")} alt="" />


                        {/* <h5>- We all intend to plan ahead.</h5>  */}

                        <p className="p1">
                          这也解释了为什么通过测试题判定人格类型不如通过直接聊天进行判型更为准确，但前提是被判型者没有过多故意调整和改变自己平常状态下的观点和表达。<br /> <br />
                          在聊天中，认知过程直接在<strong>实在界</strong>呈现，并且经由判型者<strong>现象学式</strong>（Phenomenological）的<strong>意向性</strong>（Intentionality）感知—— <br />
                          判型者对现象进行了意向上的“直接的认识”。
                        </p>

                        <p className="p1">
                          此外，聊天时，若被判型者对自身被观察不知情，大概率也不会引入任何判型者以外的观察者，而此时判型者对于被判型者平常状态的认知过程的认识是最为直接的。<br />
                          相反，如果被判型者知晓自己的认知过程正在被观察，那么他们很有可能会进行对自身认知过程的<strong>“自我凝视”</strong>（Gaze），以此便会干扰判型者对被判型者自然流露的认知过程的感知。<br />
                          <br />
                          <strong>霍桑效应</strong>（Hawthorne Effect）或许可以在某种程度上解释这一现象—— <br />
                          当被研究者或参与者在意识到自己正在接受观察或研究时，他们会因为这一认识而改变其行为，且该效应取决于被观察者的主观意识，即他们是否意识到自己正在接受观察。
                        </p>

                        <img src={require("/assets/img/posts/Feb16/hawthrone.jpg")} alt="" />


                        {/* <div className="quotes text-center">
                          <p className="p1">
                            Never ever think of giving up. Winners never quit
                            and quitters never win. Take all negative words out
                            of your mental dictionary and focus on the solutions
                            with utmost conviction and patience. The battle is
                            never lost until you&apos;ve abandon your vision.
                          </p>
                        </div> */}

                        <p className="p1">
                          因此，通过聊天（尤其当判型者的观察状态未被披露时）更容易抓取到被判型者认知过程的抽象趋势，而测试题则只能从<strong>语言意涵</strong>上得出结果，无法观察到<strong>真实</strong>发生的认知过程（除非是以书面形式表达的对话）。<br />
                          也就是说，判定人格类型的最佳方式应当以<strong>自然流露</strong>自然流露的认知过程为基础，而真正的人格类型应当只是为实在界真实发生的认知过程赋予了其正确范畴内的<strong>名称</strong>。<br /> <br />
                          简而言之，通过<strong>直接意向而非象征化</strong>的方式能更准确地理解和判定个体的人格类型。
                        </p>

                        {/* <div className="row">
                          <div className="col-md-6">
                            <div className="mb-10">
                              <img src="/assets/img/blog/single.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-10">
                              <img src="/assets/img/blog/single.jpg" alt="" />
                            </div>
                          </div>
                        </div> */}

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
