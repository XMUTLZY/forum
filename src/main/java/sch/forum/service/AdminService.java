package sch.forum.service;

import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import sch.forum.constant.CommonConstants;
import sch.forum.domain.AdminEntity;
import sch.forum.domain.AdminOperateEntity;
import sch.forum.domain.GameEntity;
import sch.forum.domain.TopicCommentEntity;
import sch.forum.domain.TopicEntity;
import sch.forum.domain.UserEntity;
import sch.forum.http.request.AdminRequest;
import sch.forum.http.request.GameRequest;
import sch.forum.http.response.BaseResponse;
import sch.forum.http.response.LayerResponse;
import sch.forum.http.vo.AdminOperateLog;
import sch.forum.http.vo.Comment;
import sch.forum.http.vo.Game;
import sch.forum.http.vo.Topic;
import sch.forum.http.vo.User;
import sch.forum.repository.AdminOperateRepository;
import sch.forum.repository.AdminRepository;
import sch.forum.repository.GameRepository;
import sch.forum.repository.TopicCommentRepository;
import sch.forum.repository.TopicRepository;
import sch.forum.repository.UserRepository;
import sch.forum.util.CommonUtils;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private GameRepository gameRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TopicRepository topicRepository;
    @Autowired
    private TopicCommentRepository topicCommentRepository;
    @Autowired
    private AdminOperateRepository adminOperateRepository;

    public BaseResponse login(AdminRequest request, HttpServletRequest httpServletRequest, HttpServletResponse response) {
        AdminEntity adminEntity = adminRepository.findDistinctByMobileAndPassword(request.getPhone(), new Md5Hash(request.getPassword()).toString());
        if (adminEntity == null) {
            return new BaseResponse(BaseResponse.FAILD_CODE, "管理员不存在");
        } else {
            // 登录成功 设置缓存
            httpServletRequest.getSession().setAttribute(CommonConstants.ADMIN_INFO_KEY, adminEntity);
            return new BaseResponse();
        }
    }

    public LayerResponse gameList(Pageable pageable, HttpServletRequest request) {
        Page<GameEntity> gameEntityPage = gameRepository.findAll(pageable);
        LayerResponse layerResponse = new LayerResponse();
        List<Game> gameList = new ArrayList<>();
        for (GameEntity gameEntity : gameEntityPage) {
            Game game = new Game();
            BeanUtils.copyProperties(gameEntity, game);
            game.setUpdateTimeStr(CommonUtils.formatDate(gameEntity.getUpdateTime()));
            game.setCreateTimeStr(CommonUtils.formatDate(gameEntity.getCreateTime()));
            game.setGameTypeStr(buildGameType(gameEntity.getGameType()));
            gameList.add(game);
        }
        layerResponse.setData(gameList);
        layerResponse.setCount((int) gameRepository.count());
        return layerResponse;
    }

    private String buildGameType(Integer gameType) {
        switch (gameType) {
            case CommonConstants.GAME_TYPE_HOT:
                return "热门游戏";
            case CommonConstants.GAME_TYPE_RECOMMEND:
                return "推荐游戏";
            case CommonConstants.GAME_TYPE_COMMON:
                return "无";
            default:
                return "无";
        }
    }

    public BaseResponse gameDelete(Integer gameId) {
        gameRepository.deleteById(gameId);
        return new BaseResponse();
    }

    public BaseResponse gameGet(Integer gameId) {
        BaseResponse response = new BaseResponse();
        GameEntity gameEntity = gameRepository.findById(gameId).get();
        Game game = new Game();
        BeanUtils.copyProperties(gameEntity, game);
        game.setUpdateTimeStr(CommonUtils.formatDate(gameEntity.getUpdateTime()));
        game.setCreateTimeStr(CommonUtils.formatDate(gameEntity.getCreateTime()));
        game.setGameTypeStr(buildGameType(gameEntity.getGameType()));
        response.setVo(game);
        return response;
    }

    public BaseResponse gameAdd(GameRequest gameRequest) {
        BaseResponse response = new BaseResponse();
        GameEntity gameEntity = new GameEntity();
        gameEntity.setCover(gameRequest.getCover());
        gameEntity.setDescription(gameRequest.getDescription());
        gameEntity.setGameName(gameRequest.getGameName());
        gameEntity.setUpdateTime(new Date());
        gameEntity.setCreateTime(new Date());
        gameEntity.setGameType(gameRequest.getGameType());
        gameRepository.save(gameEntity);
        return response;
    }

    public BaseResponse gameUpdate(GameRequest gameRequest) {
        BaseResponse response = new BaseResponse();
        GameEntity gameEntity = gameRepository.findById(gameRequest.getId()).get();
        gameEntity.setCover(gameRequest.getCover());
        gameEntity.setDescription(gameRequest.getDescription());
        gameEntity.setGameName(gameRequest.getGameName());
        gameEntity.setUpdateTime(new Date());
        gameEntity.setGameType(gameRequest.getGameType());
        gameRepository.save(gameEntity);
        return response;
    }

    public LayerResponse userList(Pageable pageable, HttpServletRequest request) {
        Page<UserEntity> userEntityPage = userRepository.findAll(pageable);
        LayerResponse layerResponse = new LayerResponse();
        List<User> userList = new ArrayList<>();
        for (UserEntity userEntity : userEntityPage) {
            User user = new User();
            BeanUtils.copyProperties(userEntity, user);
            user.setUpdateTimeStr(CommonUtils.formatDate(userEntity.getUpdateTime()));
            user.setCreateTimeStr(CommonUtils.formatDate(userEntity.getCreateTime()));
            user.setStatusStr(buildStatusStr(userEntity.getStatus()));
            userList.add(user);
        }
        layerResponse.setData(userList);
        layerResponse.setCount((int) userRepository.count());
        return layerResponse;
    }

    private String buildStatusStr(Integer status) {
        switch (status) {
            case CommonConstants.STATUS_NO:
                return "已拒绝";
            case CommonConstants.STATUS_WAIT:
                return "待审核";
            case CommonConstants.STATUS_YES:
                return "审核通过";
            default:
                return "待审核";
        }
    }

    public BaseResponse userVerify(Integer id, Integer status) {
        BaseResponse response = new BaseResponse();
        UserEntity userEntity = userRepository.findById(id).get();
        userEntity.setStatus(status);
        userEntity.setUpdateTime(new Date());
        userRepository.save(userEntity);
        return response;
    }

    public LayerResponse topicList(Pageable pageable, HttpServletRequest request) {
        LayerResponse layerResponse = new LayerResponse();
        Page<TopicEntity> topicEntityPage = topicRepository.findAll(pageable);
        List<Topic> topicList = new ArrayList<>();
        for (TopicEntity topicEntity : topicEntityPage) {
            Topic topic = new Topic();
            BeanUtils.copyProperties(topicEntity, topic);
            topic.setCreateTimeStr(CommonUtils.formatDate(topicEntity.getCreateTime()));
            topic.setUpdateTimeStr(CommonUtils.formatDate(topicEntity.getUpdateTime()));
            if (topicEntity.getIsRecommend() == CommonConstants.RECOMMEND_YES) {
                topic.setRecommendStatusStr("推荐");
            } else {
                topic.setRecommendStatusStr("不推荐");
            }
            topic.setVerifyStatusStr(buildStatusStr(topicEntity.getVerifyStatus()));
            Optional<UserEntity> userEntityOptional = userRepository.findById(topicEntity.getUserId());
            if (userEntityOptional.isPresent()) {
                topic.setUserName(userEntityOptional.get().getUserName());
            }
            Optional<GameEntity> gameEntityOptional = gameRepository.findById(topicEntity.getGameId());
            if (gameEntityOptional.isPresent()) {
                topic.setGameName(gameEntityOptional.get().getGameName());
            }
            topicList.add(topic);
        }
        layerResponse.setData(topicList);
        layerResponse.setCount((int) topicRepository.count());
        return layerResponse;
    }

    public BaseResponse topicVerify(Integer id, Integer status) {
        BaseResponse response = new BaseResponse();
        TopicEntity topicEntity = topicRepository.findById(id).get();
        topicEntity.setVerifyStatus(status);
        topicEntity.setUpdateTime(new Date());
        topicRepository.save(topicEntity);
        return response;
    }

    public BaseResponse topicRecommend(Integer id, Integer status) {
        BaseResponse response = new BaseResponse();
        TopicEntity topicEntity = topicRepository.findById(id).get();
        topicEntity.setIsRecommend(status);
        topicEntity.setUpdateTime(new Date());
        topicRepository.save(topicEntity);
        return response;
    }

    public LayerResponse commentList(Pageable pageable, HttpServletRequest request) {
        LayerResponse layerResponse = new LayerResponse();
        Page<TopicCommentEntity> topicCommentEntityPage = topicCommentRepository.findAll(pageable);
        List<Comment> commentList = new ArrayList<>();
        for (TopicCommentEntity topicCommentEntity : topicCommentEntityPage) {
            Comment comment = new Comment();
            BeanUtils.copyProperties(topicCommentEntity, comment);
            comment.setCreateTimeStr(CommonUtils.formatDate(topicCommentEntity.getCreateTime()));
            comment.setUpdateTimeStr(CommonUtils.formatDate(topicCommentEntity.getUpdateTime()));
            comment.setStatusStr(buildStatusStr(topicCommentEntity.getStatus()));
            Optional<TopicEntity> topicEntityOptional = topicRepository.findById(topicCommentEntity.getTopicId());
            if (topicEntityOptional.isPresent()) {
                comment.setTopicName(topicEntityOptional.get().getTopicName());
            }
            Optional<UserEntity> userEntityOptional = userRepository.findById(topicCommentEntity.getUserId());
            if (userEntityOptional.isPresent()) {
                comment.setUserName(userEntityOptional.get().getUserName());
            }
            commentList.add(comment);
        }
        layerResponse.setData(commentList);
        layerResponse.setCount((int) topicCommentRepository.count());
        return layerResponse;
    }

    public BaseResponse commentVerify(Integer id, Integer status) {
        BaseResponse response = new BaseResponse();
        TopicCommentEntity topicCommentEntity = topicCommentRepository.findById(id).get();
        topicCommentEntity.setStatus(status);
        topicCommentEntity.setUpdateTime(new Date());
        topicCommentRepository.save(topicCommentEntity);
        return response;
    }

    public void operateRecord(AdminOperateLog adminOperateLog) {
        AdminOperateEntity adminOperateEntity = new AdminOperateEntity();
        adminOperateEntity.setAdminId(adminOperateLog.getAdminId());
        adminOperateEntity.setIp(adminOperateLog.getIp());
        adminOperateEntity.setMobile(adminOperateLog.getMobile());
        adminOperateEntity.setOperateStr(adminOperateLog.getOperateStr());
        adminOperateEntity.setOperateTime(adminOperateLog.getOperateTime());
        adminOperateEntity.setUserName(adminOperateLog.getUserName());
        adminOperateRepository.save(adminOperateEntity);
    }

    public List<AdminOperateLog> operateRecords(String key) {
        List<AdminOperateLog> adminOperateLogList = new ArrayList<>();
        List<AdminOperateEntity> adminOperateEntityList;
        if (StringUtils.hasText(key)) {
            adminOperateEntityList = adminOperateRepository.findAllByUserNameLikeOrderByAdminIdDesc(key);
        } else {
            adminOperateEntityList = adminOperateRepository.findAllByOrderByAdminIdDesc();
        }
        for (AdminOperateEntity adminOperateEntity : adminOperateEntityList) {
            AdminOperateLog adminOperateLog = new AdminOperateLog();
            BeanUtils.copyProperties(adminOperateEntity, adminOperateLog);
            adminOperateLogList.add(adminOperateLog);
        }
        return adminOperateLogList;
    }
}
