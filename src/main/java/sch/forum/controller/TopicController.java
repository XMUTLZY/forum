package sch.forum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import sch.forum.constant.CommonConstants;
import sch.forum.http.request.TopicRequest;
import sch.forum.http.response.BaseResponse;
import sch.forum.service.TopicService;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/topic")
public class TopicController {
    @Autowired
    private TopicService topicService;

    /**
     * 话题详情
     *
     * @param id
     * @return
     */
    @RequestMapping(value = "/detail", method = RequestMethod.GET)
    @ResponseBody
    public BaseResponse topicDetail(@RequestParam Integer id) {
        return topicService.topicDetail(id);
    }

    /**
     * 话题列表
     *
     * @return
     */
    @RequestMapping(value = "/list", method = RequestMethod.POST)
    @ResponseBody
    public BaseResponse topicList(@RequestBody TopicRequest topicRequest, HttpServletRequest httpServletRequest) {
        httpServletRequest.getSession().setAttribute(CommonConstants.TOPIC_INFO_KEY, topicRequest.getGameId());
        return new BaseResponse();
    }
}
