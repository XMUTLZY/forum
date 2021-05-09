package sch.forum.http.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TopicRequest {
    private Integer id;
    @JsonProperty("topic_name")
    private String topicName;
    @JsonProperty("game_id")
    private Integer gameId;
    private String description;

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    public Integer getGameId() {
        return gameId;
    }

    public void setGameId(Integer gameId) {
        this.gameId = gameId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
