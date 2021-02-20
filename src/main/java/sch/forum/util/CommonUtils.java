package sch.forum.util;

import sch.forum.constant.CommonConstants;
import sch.forum.domain.AdminEntity;
import sch.forum.domain.UserEntity;
import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CommonUtils {
    private static final String DATE_FORMAT_DATETIME = "yyyy-MM-dd HH:mm:ss";

    public static UserEntity getCurrentUserInfo(HttpServletRequest request) {
        return (UserEntity) request.getSession().getAttribute(CommonConstants.USER_INFO_KEY);
    }

    public static AdminEntity getCurrentAdminInfo(HttpServletRequest request) {
        return (AdminEntity) request.getSession().getAttribute(CommonConstants.ADMIN_INFO_KEY);
    }

    public static String formatDate(Date date) {
        if (date == null) {
            return null;
        }
        return new SimpleDateFormat(DATE_FORMAT_DATETIME).format(date);
    }
}
