package sch.forum.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "admin_operate")
@Entity
public class AdminOperateEntity {
    @Id
    @GeneratedValue
    @Column(name = "admin_id")
    private Integer adminId;
    @Column(name = "user_name")
    private String userName;
    @Column(name = "mobile")
    private String mobile;
    @Column(name = "operate_str")
    private String operateStr;
    @Column(name = "ip")
    private String ip;
    @Column(name = "operate_time")
    private String operateTime;

    public Integer getAdminId() {
        return adminId;
    }

    public void setAdminId(Integer adminId) {
        this.adminId = adminId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getOperateStr() {
        return operateStr;
    }

    public void setOperateStr(String operateStr) {
        this.operateStr = operateStr;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getOperateTime() {
        return operateTime;
    }

    public void setOperateTime(String operateTime) {
        this.operateTime = operateTime;
    }
}
