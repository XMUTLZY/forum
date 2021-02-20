package sch.forum.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import sch.forum.constant.CommonConstants;
import sch.forum.domain.AdminEntity;
import sch.forum.util.CommonUtils;
import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/adminView")
public class AdminViewController {
    @RequestMapping("/index")
    public String userIndex(Model model, HttpServletRequest request) {
        return commonView(request, model);
    }

    @RequestMapping("/login")
    public String userLogin(HttpServletRequest request, Model model) {
        return commonView(request, model);
    }

    @RequestMapping("/logout")
    public String userLogout(HttpServletRequest request) {
        request.getSession().setAttribute(CommonConstants.ADMIN_INFO_KEY, null);
        return "/adminLogin";
    }

    private String commonView(HttpServletRequest request, Model model) {
        AdminEntity adminEntity = CommonUtils.getCurrentAdminInfo(request);
        // 当前没有管理员登录
        if (adminEntity == null) {
            return "/adminLogin";
        } else {
            model.addAttribute("admin", adminEntity);
            return "/adminIndex";
        }
    }

}

