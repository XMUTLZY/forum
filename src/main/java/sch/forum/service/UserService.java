package sch.forum.service;

import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import sch.forum.constant.CommonConstants;
import sch.forum.domain.GameEntity;
import sch.forum.domain.TopicCommentEntity;
import sch.forum.domain.TopicEntity;
import sch.forum.domain.UserEntity;
import sch.forum.http.request.CommentRequest;
import sch.forum.http.request.TopicRequest;
import sch.forum.http.request.UserRequest;
import sch.forum.http.response.BaseResponse;
import sch.forum.http.response.LayerResponse;
import sch.forum.http.vo.Topic;
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
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TopicRepository topicRepository;
    @Autowired
    private GameRepository gameRepository;
    @Autowired
    private TopicCommentRepository topicCommentRepository;

    public BaseResponse login(UserRequest request, HttpServletRequest httpServletRequest, HttpServletResponse response) {
        UserEntity userEntity = userRepository.findDistinctByMobileAndPasswordAndStatus(request.getPhone(), new Md5Hash(request.getPassword()).toString(), CommonConstants.STATUS_YES);
        if (userEntity == null) {
            return new BaseResponse(BaseResponse.FAILD_CODE, "账户不存在/审核中");
        } else {
            // 登录成功 设置缓存
            httpServletRequest.getSession().setAttribute(CommonConstants.USER_INFO_KEY, userEntity);
            return new BaseResponse();
        }
    }

    public BaseResponse register(UserRequest request) {
        UserEntity userEntity = new UserEntity();
        BaseResponse response = new BaseResponse();
        userEntity.setAddress(request.getAddress());
        userEntity.setCreateTime(new Date());
        userEntity.setUpdateTime(new Date());
        userEntity.setPassword(new Md5Hash(request.getPassword()).toString());
        userEntity.setMobile(request.getPhone());
        userEntity.setDescription(request.getDescription());
        userEntity.setUserName(request.getUserName());
        userEntity.setStatus(CommonConstants.STATUS_WAIT);
        userRepository.save(userEntity);
        return response;
    }

    public BaseResponse topicAdd(TopicRequest request, HttpServletRequest httpServletRequest) {
        UserEntity userEntity = CommonUtils.getCurrentUserInfo(httpServletRequest);
        TopicEntity topicEntity = new TopicEntity();
        topicEntity.setTopicName(request.getTopicName());
        topicEntity.setUserId(userEntity.getId());
        topicEntity.setGameId(request.getGameId());
        topicEntity.setDescription(request.getDescription());
        topicEntity.setVerifyStatus(CommonConstants.STATUS_WAIT);
        topicEntity.setIsRecommend(CommonConstants.RECOMMEND_NO);
        Date now = new Date();
        topicEntity.setCreateTime(now);
        topicEntity.setUpdateTime(now);
        topicRepository.save(topicEntity);
        return new BaseResponse();
    }

    public BaseResponse topicUpdate(TopicRequest request, HttpServletRequest httpServletRequest) {
        UserEntity userEntity = CommonUtils.getCurrentUserInfo(httpServletRequest);
        TopicEntity topicEntity = topicRepository.findById(request.getId()).get();
        topicEntity.setTopicName(request.getTopicName());
        topicEntity.setUserId(userEntity.getId());
        topicEntity.setGameId(request.getGameId());
        topicEntity.setDescription(request.getDescription());
        topicEntity.setVerifyStatus(CommonConstants.STATUS_WAIT);
        topicEntity.setIsRecommend(CommonConstants.RECOMMEND_NO);
        topicEntity.setUpdateTime(new Date());
        topicRepository.save(topicEntity);
        return new BaseResponse();
    }

    public LayerResponse topicList(Pageable pageable, HttpServletRequest httpServletRequest) {
        UserEntity userEntity = CommonUtils.getCurrentUserInfo(httpServletRequest);
        Page<TopicEntity> topicEntityPage = topicRepository.findAllByUserId(pageable, userEntity.getId());
        LayerResponse layerResponse = new LayerResponse();
        List<Topic> topicList = new ArrayList<>();
        for (TopicEntity topicEntity : topicEntityPage) {
            Topic topic = new Topic();
            BeanUtils.copyProperties(topicEntity, topic);
            topic.setUpdateTimeStr(CommonUtils.formatDate(topicEntity.getUpdateTime()));
            topic.setCreateTimeStr(CommonUtils.formatDate(topicEntity.getCreateTime()));
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
        layerResponse.setCount(topicRepository.countByUserId(userEntity.getId()));
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

    public BaseResponse commentAdd(CommentRequest request, HttpServletRequest httpServletRequest) {
        UserEntity userEntity = CommonUtils.getCurrentUserInfo(httpServletRequest);
        TopicCommentEntity commentEntity = new TopicCommentEntity();
        commentEntity.setContent(request.getContent());
        commentEntity.setTopicId(request.getTopicId());
        commentEntity.setUserId(userEntity.getId());
        commentEntity.setStatus(CommonConstants.STATUS_WAIT);
        Date now = new Date();
        commentEntity.setCreateTime(now);
        commentEntity.setUpdateTime(now);
        topicCommentRepository.save(commentEntity);
        return new BaseResponse();
    }

    public BaseResponse topicDelete(Integer topicId) {
        topicRepository.deleteById(topicId);
        topicCommentRepository.deleteByTopicId(topicId);
        return new BaseResponse();
    }

    public BaseResponse update(UserRequest userRequest, HttpServletRequest httpServletRequest) {
        UserEntity userEntity = CommonUtils.getCurrentUserInfo(httpServletRequest);
        userEntity.setUpdateTime(new Date());
        userEntity.setDescription(userRequest.getDescription());
        userEntity.setAddress(userRequest.getAddress());
        userEntity.setPassword(new Md5Hash(userRequest.getPassword()).toString());
        userEntity.setUserName(userRequest.getUserName());
        userRepository.save(userEntity);
        return new BaseResponse();
    }
}
