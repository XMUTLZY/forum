package sch.forum.http.request;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @version: 1.00.00
 * @description:
 * @copyright: Copyright (c) 2021 立林科技 All Rights Reserved
 * @company: 厦门立林科技有限公司
 * @author: linzhenyuan
 * @date: 2021-05-07 21:26
 */
public class CommentRequest {
    private String content;
    @JsonProperty("topic_id")
    private Integer topicId;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getTopicId() {
        return topicId;
    }

    public void setTopicId(Integer topicId) {
        this.topicId = topicId;
    }
}
