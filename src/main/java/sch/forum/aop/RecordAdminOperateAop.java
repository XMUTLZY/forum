package sch.forum.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import sch.forum.domain.AdminEntity;
import sch.forum.http.request.GameRequest;
import sch.forum.http.response.BaseResponse;
import sch.forum.http.response.LayerResponse;
import sch.forum.http.vo.AdminOperateLog;
import sch.forum.service.AdminService;
import sch.forum.util.CommonUtils;
import sch.forum.util.SystemUtils;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;

@Component
@Aspect
public class RecordAdminOperateAop {
    @Autowired
    private AdminService adminService;
    private Logger logger = LoggerFactory.getLogger(getClass());

    @Before("pointCut()")
    public void before() {
        logger.info("before AdminController init");
    }

    @Pointcut("execution(* sch.forum.controller.AdminController.*(..))")
    public void pointCut() {
        logger.info("pointCut AdminController init");
    }

    @AfterReturning(returning = "response", value = "pointCut()")
    public void afterRunning(JoinPoint joinPoint, Object response) {
        logger.info("after AdminController init");
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        AdminEntity adminEntity = CommonUtils.getCurrentAdminInfo(request);
        String requestMethod = joinPoint.getSignature().getName();//获取方法名
        AdminOperateLog adminOperateLog = new AdminOperateLog();
        adminOperateLog.setIp(SystemUtils.getIpAddr(request));
        buildAdminOperateLogInfo(adminEntity, adminOperateLog, requestMethod, joinPoint, response);
        adminService.operateRecord(adminOperateLog);
    }

    private void buildAdminOperateLogInfo(AdminEntity adminEntity, AdminOperateLog adminOperateLog, String requestMethod,
                                          JoinPoint joinPoint, Object response) {
        adminOperateLog.setAdminId(adminEntity.getId());
        adminOperateLog.setUserName(adminEntity.getUserName());
        adminOperateLog.setMobile(adminEntity.getMobile());
        adminOperateLog.setOperateTime(CommonUtils.formatDate(new Date()));
        switch (requestMethod) {
            case "login":
                BaseResponse baseResponse1 = (BaseResponse) response;
                if (baseResponse1.getStatusCode() == BaseResponse.SUCCESS_CODE) {
                    adminOperateLog.setOperateStr(buildAdminOperateStr(adminOperateLog, "登录了后台"));
                }
                break;
            case "gameList":
                LayerResponse layerResponse1 = (LayerResponse) response;
                if (layerResponse1.getCode() == LayerResponse.SUCCESS_CODE) {
                    adminOperateLog.setOperateStr(buildAdminOperateStr(adminOperateLog, "查询了游戏列表"));
                }
                break;
            case "gameDelete":
                LayerResponse layerResponse2 = (LayerResponse) response;
                if (layerResponse2.getCode() == LayerResponse.SUCCESS_CODE) {
                    Integer gameId = (Integer) joinPoint.getArgs()[0];
                    adminOperateLog.setOperateStr(buildAdminOperateStr(adminOperateLog, "删除了ID为" + gameId + "的游戏信息"));
                }
                break;
            case "gameGet":
                BaseResponse baseResponse3 = (BaseResponse) response;
                if (baseResponse3.getStatusCode() == BaseResponse.SUCCESS_CODE) {
                    Integer gameId = (Integer) joinPoint.getArgs()[0];
                    adminOperateLog.setOperateStr(buildAdminOperateStr(adminOperateLog, "查询了ID为" + gameId + "的游戏信息"));
                }
                break;
            case "gameAdd":
                BaseResponse baseResponse4 = (BaseResponse) response;
                if (baseResponse4.getStatusCode() == BaseResponse.SUCCESS_CODE) {
                    String gameName = ((GameRequest) joinPoint.getArgs()[0]).getGameName();
                    adminOperateLog.setOperateStr(buildAdminOperateStr(adminOperateLog, "新增了名称为" + gameName + "的游戏信息"));
                }
                break;
            case "gameUpdate":
                BaseResponse baseResponse10 = (BaseResponse) response;
                if (baseResponse10.getStatusCode() == BaseResponse.SUCCESS_CODE) {
                    String gameName = ((GameRequest) joinPoint.getArgs()[0]).getGameName();
                    adminOperateLog.setOperateStr(buildAdminOperateStr(adminOperateLog, "修改了名称为" + gameName + "的游戏信息"));
                }
                break;
            case "userList":
                LayerResponse layerResponse3 = (LayerResponse) response;
                if (layerResponse3.getCode() == LayerResponse.SUCCESS_CODE) {
                    adminOperateLog.setOperateStr(buildAdminOperateStr(adminOperateLog, "查询了用户列表"));
                }
                break;
            case "topicList":
                LayerResponse layerResponse4 = (LayerResponse) response;
                if (layerResponse4.getCode() == LayerResponse.SUCCESS_CODE) {
                    adminOperateLog.setOperateStr(buildAdminOperateStr(adminOperateLog, "查询了话题列表"));
                }
                break;
            case "adminList":
                LayerResponse layerResponse5 = (LayerResponse) response;
                if (layerResponse5.getCode() == LayerResponse.SUCCESS_CODE) {
                    adminOperateLog.setOperateStr(buildAdminOperateStr(adminOperateLog, "查询了管理员列表"));
                }
                break;
            case "userVerify":
                BaseResponse baseResponse5 = (BaseResponse) response;
                if (baseResponse5.getStatusCode() == BaseResponse.SUCCESS_CODE) {
                    Integer userId = (Integer) joinPoint.getArgs()[0];
                    adminOperateLog.setOperateStr(buildAdminOperateStr(adminOperateLog, "审核了用户，ID为" + userId));
                }
                break;
            case "topicVerify":
                BaseResponse baseResponse6 = (BaseResponse) response;
                if (baseResponse6.getStatusCode() == BaseResponse.SUCCESS_CODE) {
                    Integer topicId = (Integer) joinPoint.getArgs()[0];
                    adminOperateLog.setOperateStr(buildAdminOperateStr(adminOperateLog, "审核了话题，ID为" + topicId));
                }
                break;
            case "topicRecommend":
                BaseResponse baseResponse7 = (BaseResponse) response;
                if (baseResponse7.getStatusCode() == BaseResponse.SUCCESS_CODE) {
                    Integer topicId = (Integer) joinPoint.getArgs()[0];
                    adminOperateLog.setOperateStr(buildAdminOperateStr(adminOperateLog, "推荐了话题，ID为" + topicId));
                }
                break;
            case "commentVerify":
                BaseResponse baseResponse8 = (BaseResponse) response;
                if (baseResponse8.getStatusCode() == BaseResponse.SUCCESS_CODE) {
                    Integer commentId = (Integer) joinPoint.getArgs()[0];
                    adminOperateLog.setOperateStr(buildAdminOperateStr(adminOperateLog, "审核了评论，ID为" + commentId));
                }
                break;
            case "operateRecords":
                adminOperateLog.setOperateStr(buildAdminOperateStr(adminOperateLog, "查询了操作记录列表"));
                break;
//            case "controlPanel":
//                adminOperateLog.setOperateStr(buildAdminOperateStr(adminOperateLog, "访问了控制台、营业额等数据"));
//                break;
            default:
                break;
        }
    }

    private String buildAdminOperateStr(AdminOperateLog adminOperateLog, String operate) {
        return adminOperateLog.getUserName() + "(" + adminOperateLog.getMobile() + ")" + operate;
    }
}
