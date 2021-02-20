package sch.forum.service;

import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sch.forum.constant.CommonConstants;
import sch.forum.domain.UserEntity;
import sch.forum.http.request.UserRequest;
import sch.forum.http.response.BaseResponse;
import sch.forum.repository.UserRepository;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

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

}
