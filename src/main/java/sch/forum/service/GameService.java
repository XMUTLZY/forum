package sch.forum.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sch.forum.domain.GameEntity;
import sch.forum.http.vo.Game;
import sch.forum.repository.GameRepository;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class GameService {
    @Autowired
    private GameRepository gameRepository;

    /**
     * 获取用户首页顶部的分类
     * @return
     */
    public List<Game> getTabGameName() {
        List<GameEntity> gameEntityList = gameRepository.findAllByOrderByGameTypeDesc();
        List<Game> gameList = new ArrayList<>();
        gameList.add(new Game(null, "热门话题"));
        gameList.add(new Game(null, "推荐话题"));
        int count = 0;
        for (GameEntity gameEntity : gameEntityList) {
            if (count >= 4) {
                break;
            }
            Game game = new Game(gameEntity.getId(), gameEntity.getGameName());
            gameList.add(game);
            count++;
        }
        return gameList;
    }
}
