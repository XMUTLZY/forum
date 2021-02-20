package sch.forum.http.vo;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Topic {
    private Integer id;
    private String topicName;
    private String userName;
    private String gameName;
    private String description;
    private String createTimeStr;
    private String updateTimeStr;
    private String recommendStatusStr;
    private String verifyStatusStr;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreateTimeStr() {
        return createTimeStr;
    }

    public void setCreateTimeStr(String createTimeStr) {
        this.createTimeStr = createTimeStr;
    }

    public String getUpdateTimeStr() {
        return updateTimeStr;
    }

    public void setUpdateTimeStr(String updateTimeStr) {
        this.updateTimeStr = updateTimeStr;
    }

    public String getRecommendStatusStr() {
        return recommendStatusStr;
    }

    public void setRecommendStatusStr(String recommendStatusStr) {
        this.recommendStatusStr = recommendStatusStr;
    }

    public String getVerifyStatusStr() {
        return verifyStatusStr;
    }

    public void setVerifyStatusStr(String verifyStatusStr) {
        this.verifyStatusStr = verifyStatusStr;
    }
}
