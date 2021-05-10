package sch.forum.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import sch.forum.constant.CommonConstants;
import sch.forum.domain.GameEntity;
import sch.forum.domain.TopicCommentEntity;
import sch.forum.domain.TopicEntity;
import sch.forum.domain.UserEntity;
import sch.forum.http.response.BaseResponse;
import sch.forum.http.vo.Comment;
import sch.forum.http.vo.Topic;
import sch.forum.repository.GameRepository;
import sch.forum.repository.TopicCommentRepository;
import sch.forum.repository.TopicRepository;
import sch.forum.repository.UserRepository;
import sch.forum.util.CommonUtils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

/**
 * @version: 1.00.00
 * @description:
 * @copyright: Copyright (c) 2021 立林科技 All Rights Reserved
 * @company: 厦门立林科技有限公司
 * @author: linzhenyuan
 * @date: 2021-05-07 21:34
 */
@Service
public class TopicService {
    @Autowired
    private TopicRepository topicRepository;
    @Autowired
    private TopicCommentRepository topicCommentRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private GameRepository gameRepository;

    public BaseResponse topicDetail(Integer id) {
        BaseResponse response = new BaseResponse();
        TopicEntity topicEntity = topicRepository.findById(id).get();
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
            topic.setPortrait(userEntityOptional.get().getPortrait());
            topic.setAddress(userEntityOptional.get().getAddress());
        }
        Optional<GameEntity> gameEntityOptional = gameRepository.findById(topicEntity.getGameId());
        if (gameEntityOptional.isPresent()) {
            topic.setGameName(gameEntityOptional.get().getGameName());
        }
        List<TopicCommentEntity> topicCommentEntityList = topicCommentRepository.findAllByTopicId(topic.getId());
        List<Comment> commentList = new ArrayList<>();
        topicCommentEntityList.forEach(topicCommentEntity -> {
            Comment comment = new Comment();
            BeanUtils.copyProperties(topicCommentEntity, comment);
            comment.setCreateTimeStr(CommonUtils.formatDate(topicCommentEntity.getCreateTime()));
            comment.setUpdateTimeStr(CommonUtils.formatDate(topicCommentEntity.getUpdateTime()));
            comment.setStatusStr(buildStatusStr(topicCommentEntity.getStatus()));
            Optional<TopicEntity> topicEntityOptional = topicRepository.findById(topicCommentEntity.getTopicId());
            if (topicEntityOptional.isPresent()) {
                comment.setTopicName(topicEntityOptional.get().getTopicName());
            }
            if (userEntityOptional.isPresent()) {
                comment.setUserName(userEntityOptional.get().getUserName());
                comment.setPortrait(userEntityOptional.get().getPortrait());
            }
            commentList.add(comment);
        });
        topic.setCommentList(commentList);
        topic.setCommentSize(CollectionUtils.isEmpty(topicCommentEntityList) ? 0 : topicCommentEntityList.size());
        response.setVo(topic);
        return response;
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
}
