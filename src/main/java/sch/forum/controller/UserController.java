package sch.forum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import sch.forum.http.request.CommentRequest;
import sch.forum.http.request.TopicRequest;
import sch.forum.http.request.UserRequest;
import sch.forum.http.response.BaseResponse;
import sch.forum.http.response.LayerResponse;
import sch.forum.service.UserService;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping(value = "/user")
public class UserController {
    @Autowired
    private UserService userService;

    /**
     * 登录
     */
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public BaseResponse login(@RequestBody UserRequest request, HttpServletRequest httpServletRequest, HttpServletResponse response) {
        return userService.login(request, httpServletRequest, response);
    }

    /**
     * 注册
     */
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    @ResponseBody
    public BaseResponse register(@RequestBody UserRequest request) {
        return userService.register(request);
    }

    /**
     * 用户新增话题
     *
     * @param request
     * @return
     */
    @RequestMapping(value = "/topic/add", method = RequestMethod.POST)
    @ResponseBody
    public BaseResponse topicAdd(@RequestBody TopicRequest request, HttpServletRequest httpServletRequest) {
        return userService.topicAdd(request, httpServletRequest);
    }

    /**
     * 用户修改话题
     *
     * @param request
     * @return
     */
    @RequestMapping(value = "/topic/update", method = RequestMethod.POST)
    @ResponseBody
    public BaseResponse topicUpdate(@RequestBody TopicRequest request, HttpServletRequest httpServletRequest) {
        return userService.topicUpdate(request, httpServletRequest);
    }

    /**
     * 用户发表的话题列表
     *
     * @param httpServletRequest
     * @return
     */
    @RequestMapping(value = "/topic/list", method = RequestMethod.GET)
    @ResponseBody
    public LayerResponse topicList(@RequestParam Integer limit, @RequestParam Integer page, HttpServletRequest httpServletRequest) {
        Pageable pageable = PageRequest.of(page - 1, limit, Sort.Direction.ASC, "id");
        return userService.topicList(pageable, httpServletRequest);
    }

    /**
     * 用户发表评论
     *
     * @param request
     * @return
     */
    @RequestMapping(value = "/comment/add", method = RequestMethod.POST)
    @ResponseBody
    public BaseResponse commentAdd(@RequestBody CommentRequest request, HttpServletRequest httpServletRequest) {
        return userService.commentAdd(request, httpServletRequest);
    }
}
