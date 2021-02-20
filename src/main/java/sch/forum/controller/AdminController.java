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
import sch.forum.http.request.AdminRequest;
import sch.forum.http.request.GameRequest;
import sch.forum.http.response.BaseResponse;
import sch.forum.http.response.LayerResponse;
import sch.forum.http.vo.AdminOperateLog;
import sch.forum.service.AdminService;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
@RequestMapping(value = "/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    /**
     * 登录
     */
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public BaseResponse login(@RequestBody AdminRequest request, HttpServletRequest httpServletRequest, HttpServletResponse response) {
        return adminService.login(request, httpServletRequest, response);
    }

    /**
     * 游戏列表
     */
    @RequestMapping(value = "/game/list", method = RequestMethod.GET)
    @ResponseBody
    public LayerResponse gameList(@RequestParam Integer limit, @RequestParam Integer page, HttpServletRequest request) {
        Pageable pageable = PageRequest.of(page - 1, limit, Sort.Direction.ASC, "id");
        return adminService.gameList(pageable, request);
    }

    /**
     * 删除游戏
     */
    @RequestMapping(value = "/game/delete", method = RequestMethod.GET)
    @ResponseBody
    public BaseResponse gameDelete(@RequestParam Integer gameId) {
        return adminService.gameDelete(gameId);
    }

    /**
     * 获取游戏
     */
    @RequestMapping(value = "/game/get", method = RequestMethod.GET)
    @ResponseBody
    public BaseResponse gameGet(@RequestParam Integer gameId) {
        return adminService.gameGet(gameId);
    }

    /**
     * 新增游戏
     */
    @RequestMapping(value = "/game/add", method = RequestMethod.POST)
    @ResponseBody
    public BaseResponse gameAdd(@RequestBody GameRequest gameRequest) {
        return adminService.gameAdd(gameRequest);
    }

    /**
     * 修改游戏
     */
    @RequestMapping(value = "/game/update", method = RequestMethod.POST)
    @ResponseBody
    public BaseResponse gameUpdate(@RequestBody GameRequest gameRequest) {
        return adminService.gameUpdate(gameRequest);
    }

    /**
     * 用户列表
     */
    @RequestMapping(value = "/user/list", method = RequestMethod.GET)
    @ResponseBody
    public LayerResponse userList(@RequestParam Integer limit, @RequestParam Integer page, HttpServletRequest request) {
        Pageable pageable = PageRequest.of(page - 1, limit, Sort.Direction.ASC, "id");
        return adminService.userList(pageable, request);
    }

    /**
     * 审核用户
     */
    @RequestMapping(value = "/user/verify", method = RequestMethod.GET)
    @ResponseBody
    public BaseResponse userVerify(@RequestParam Integer id, @RequestParam Integer status) {
        return adminService.userVerify(id, status);
    }

    /**
     * 话题列表
     */
    @RequestMapping(value = "/topic/list", method = RequestMethod.GET)
    @ResponseBody
    public LayerResponse topicList(@RequestParam Integer limit, @RequestParam Integer page, HttpServletRequest request) {
        Pageable pageable = PageRequest.of(page - 1, limit, Sort.Direction.ASC, "id");
        return adminService.topicList(pageable, request);
    }

    /**
     * 审核话题
     */
    @RequestMapping(value = "/topic/verify", method = RequestMethod.GET)
    @ResponseBody
    public BaseResponse topicVerify(@RequestParam Integer id, @RequestParam Integer status) {
        return adminService.topicVerify(id, status);
    }

    /**
     * 推荐话题
     */
    @RequestMapping(value = "/topic/recommend", method = RequestMethod.GET)
    @ResponseBody
    public BaseResponse topicRecommend(@RequestParam Integer id, @RequestParam Integer status) {
        return adminService.topicRecommend(id, status);
    }

    /**
     * 评论列表
     */
    @RequestMapping(value = "/comment/list", method = RequestMethod.GET)
    @ResponseBody
    public LayerResponse commentList(@RequestParam Integer limit, @RequestParam Integer page, HttpServletRequest request) {
        Pageable pageable = PageRequest.of(page - 1, limit, Sort.Direction.ASC, "id");
        return adminService.commentList(pageable, request);
    }

    /**
     * 审核评论
     */
    @RequestMapping(value = "/comment/verify", method = RequestMethod.GET)
    @ResponseBody
    public BaseResponse commentVerify(@RequestParam Integer id, @RequestParam Integer status) {
        return adminService.commentVerify(id, status);
    }

    /**
     * 操作记录
     */
    @RequestMapping(value = "/operate/list", method = RequestMethod.POST)
    @ResponseBody
    public List<AdminOperateLog> operateRecords(@RequestParam(required = false) String key) {
        return adminService.operateRecords(key);
    }
}
