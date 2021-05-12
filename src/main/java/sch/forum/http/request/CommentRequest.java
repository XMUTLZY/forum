package sch.forum.http.request;

import com.fasterxml.jackson.annotation.JsonProperty;

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
