import React from "react";
import "./Events.css"

import edySysImg from "./p3.png";
import uniVisImg from "./p2.png";

const Events = () => {
  return (
    <div className="events_section container">
        <div className="news_section">
            <div className="events_title">
                <h2>Latest News</h2>
            </div>
            <div className="news_news_list">
                <div>
                    <News />
                    <News />
                    <News />
                </div>
                <a href="#" className="news_more" >More&gt;</a>
            </div>
        </div>

        <div className="education_vision">
            <div className="edu_sys">
                <div className="edu_sys_title">
                    <p>Education System</p>
                </div>
                <div className="edu_sys_card">
                    <div className="edu_sys_head">
                        <img src={uniVisImg} alt="Education System image" className="edu_sys_head_img" />
                    </div>
                    <div className="edu_sys_desc">
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
                    <a href="#" className="edu_sys_more">More&gt;</a>
                </div>
            </div>

            <div className="edu_sys">
                <div className="edu_sys_title">
                    <p>Education System</p>
                </div>
                <div className="edu_sys_card">
                    <div className="edu_sys_head">
                        <img src={edySysImg} alt="University Vision image" className="edu_sys_head_img" />
                    </div>
                    <div className="edu_sys_desc">
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
                    <a href="#" className="edu_sys_more">More&gt;</a>
                </div>
            </div>
        </div>
    </div>
  )
}


export const News = () => {
  return (
    <div className="news_box">
        <div className="news_item" >
                <div className="profile_img">
                    <img />
                </div>
                <div className="news_item_title">
                    <h5>News item title</h5>
                    <p>1h ago</p>
                </div>
                <div className="news_item_content">
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
            </div>
        </div>
  )
}


export default Events