package sch.forum.http.vo;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Game {
    private Integer id;
    private String gameName;
    private String cover;
    private String description;
    private String createTimeStr;
    private String updateTimeStr;
    private String gameTypeStr;

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
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

    public String getGameTypeStr() {
        return gameTypeStr;
    }

    public void setGameTypeStr(String gameTypeStr) {
        this.gameTypeStr = gameTypeStr;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Game(Integer id, String gameName) {
        this.id = id;
        this.gameName = gameName;
    }

    public Game() {
    }
}
