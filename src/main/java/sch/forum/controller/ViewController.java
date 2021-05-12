package sch.forum.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import sch.forum.constant.CommonConstants;
import sch.forum.domain.GameEntity;
import sch.forum.domain.TopicEntity;
import sch.forum.domain.UserEntity;
import sch.forum.http.vo.Topic;
import sch.forum.repository.GameRepository;
import sch.forum.repository.TopicRepository;
import sch.forum.repository.UserRepository;
import sch.forum.service.GameService;
import sch.forum.service.TopicService;
import sch.forum.util.CommonUtils;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Controller
@RequestMapping("/view")
public class ViewController {
    @Autowired
    private GameService gameService;
    @Autowired
    private TopicRepository topicRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private GameRepository gameRepository;
    @Autowired
    private TopicService topicService;

    @RequestMapping("/index")
    public String userIndex(Model model, HttpServletRequest request) {
        Object object = request.getSession().getAttribute(CommonConstants.TOPIC_INFO_KEY);
        List<TopicEntity> topicEntityList = new ArrayList<>();
        if (Objects.nonNull(object)) {
            Integer gameId = (Integer) object;
            if (9999999 == gameId) {
                // 推荐话题
                topicEntityList = topicRepository.findAllByVerifyStatusAndIsRecommend(CommonConstants.STATUS_YES, CommonConstants.RECOMMEND_YES);
                model.addAttribute("topicType", "推荐话题");
            } else if (8888888 == gameId) {
                // 最新话题
                topicEntityList = topicRepository.findAllByVerifyStatusOrderByCreateTime(CommonConstants.STATUS_YES);
                model.addAttribute("topicType", "最新话题");
            } else {
                topicEntityList = topicRepository.findAllByGameIdAndVerifyStatus(gameId, CommonConstants.STATUS_YES);
                Optional<GameEntity> gameEntityOptional = gameRepository.findById(gameId);
                if (gameEntityOptional.isPresent()) {
                    model.addAttribute("topicType", gameEntityOptional.get().getGameName());
                }
            }
        } else {
            topicEntityList = topicRepository.findAllByVerifyStatusAndIsRecommend(CommonConstants.STATUS_YES, CommonConstants.RECOMMEND_YES);
            model.addAttribute("topicType", "推荐话题");
        }
        List<Topic> topicList = new ArrayList<>();
        for (TopicEntity topicEntity : topicEntityList) {
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
        model.addAttribute("gameList", gameService.getTabGameName());
        model.addAttribute("topicList", topicList);
        return commonView(request, model);
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

    @RequestMapping("/login")
    public String userLogin(HttpServletRequest request, Model model) {
        return commonView(request, model);
    }

    @RequestMapping("/logout")
    public String userLogout(HttpServletRequest request) {
        request.getSession().setAttribute(CommonConstants.USER_INFO_KEY, null);
        return "/userLogin";
    }

    @RequestMapping("/userCenter")
    public String userCenter(Model model, HttpServletRequest request) {
        UserEntity userEntity = CommonUtils.getCurrentUserInfo(request);
        model.addAttribute("user", userEntity);
        return "/userCenter";
    }

    @RequestMapping("/register")
    public String userRegister() {
        return "/userRegister";
    }

    private String commonView(HttpServletRequest request, Model model) {
        UserEntity userEntity = CommonUtils.getCurrentUserInfo(request);
        // 当前没有用户登录
        if (userEntity == null) {
            return "/userLogin";
        } else {
            model.addAttribute("user", userEntity);
            return "/userIndex";
        }
    }

    @RequestMapping(value = "/topic/detail", method = RequestMethod.GET)
    public String topicDetail(Model model, HttpServletRequest request, @RequestParam Integer id) {
        Topic topic = (Topic) topicService.topicDetail(id).getVo();
        model.addAttribute("topic", topic);
        return "/detail";
    }

    @RequestMapping(value = "/topic/add", method = RequestMethod.GET)
    public String topicAdd(Model model) {
        model.addAttribute("gameList", gameRepository.findAll());
        return "/add";
    }

}
