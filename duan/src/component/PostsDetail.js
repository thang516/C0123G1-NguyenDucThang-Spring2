import * as servicePosts from "../service/Manager";
import React, {useEffect, useState} from "react";
import "./Post.css";
import {useParams} from "react-router";
import moment from "moment";


export function PostsDetail() {
    const param = useParams()
    const [postsDetail, setPostsDetail] = useState([])
    const [posts, setPosts] = useState([])
    // Hàm định dạng ngày giờ
    const formatDateTime = (dateTime) => {
        return moment(dateTime).format("DD/MM/YYYY HH:mm");
    };
    const findDetailPosts = async () => {
        const result = await servicePosts.detail(param.id)
        setPostsDetail(result)
    }
    console.log(postsDetail)
    const findAllListPost = async () => {
        const result = await servicePosts.findAllPosts()
        setPosts(result.content)
    }
    useEffect(() => {
        findAllListPost();
    }, [])
    useEffect(() => {
        findDetailPosts()
    }, [param.id])
    if (!postsDetail) {
        return null
    }
    return (
        <>
            <h2 className="d-flex justify-content-center mt-5" style={{fontFamily: "Times New Roman",color:"darkgoldenrod"}}>MAGAZINE</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-xl-9 mb-5">
                        <div className="main-content mt-4">
                            <div className="time-post1 text-posts me-4">
                                {formatDateTime(postsDetail.createDate)}
                            </div>
                            <h1 style={{textAlign: "center", fontFamily: "Times New Roman"}} className="title-news">{postsDetail.title}</h1>

                            <div className="full-content mt-5"><p></p>

                                <div className="form-old-row" style={{display: "flex"}}>
                                    <img className="imgDetail" style={{width: "auto",display: "block", marginLeft: "auto", marginRight: "auto"}}
                                         src={postsDetail.image} alt=""/>
                                </div>

                                <div
                                    style={{
                                        marginTop: "15px",
                                        fontSize: "15pt",
                                        color: "#666",
                                        fontFamily:"Times New Roman",
                                        // fontStyle: "italic",
                                        textAlign: "justify"
                                    }}>
                                    <p
                                        style={{
                                            lineHeight: "unset !important",
                                            margin: "3rem 4rem"
                                        }}>{postsDetail.content}</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-3">
                        <div className="right-pane">
                            <div className="main-news-other"><h2 className="title-other text-posts">Related news</h2>
                                <div className="list-news-other">{
                                    posts.map((post) => (
                                        <div className="row mt-3">
                                            <div className="col-4">
                                                <div className="image-post"><a href={`/detailPost/${post.id}`}>
                                                    <img style={{width: "100%",height: "100%",objectFit: "cover"}}
                                                         src={post.image} alt=""/> </a></div>
                                            </div>
                                            <div className="col-8 mt-2">
                                                <a className="text-decoration-none" href={`/detail/${post.id}`}><h3  style={{padding: "0 18px"}}     className="title-post text-posts ms-2">{post.title}</h3></a>
                                                <span className="time-post1 d-flex justify-content-end text-posts">{formatDateTime(post.createTime)}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
