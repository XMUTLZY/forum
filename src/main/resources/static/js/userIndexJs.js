$(function () {
    userIndexJs.bindEvent();
});
var userIndexJs = {
    bindEvent: function () {
        userIndexJs.event.workInfoList('all');
    },
    event: {

    },
    method: {
        logout: function () {
            $.ajax({
                url: '../admin/user/verify',
                data: {
                    id: id,
                    status: status
                },
                type: 'get',
                success: function (result) {
                    if (result.status_code == 200) {
                        layer.msg("审核完成");
                        adminIndexJs.method.userList();
                    } else {
                        layer.msg(result.message);
                    }
                },
                error: function () {
                    layer.msg("数据请求异常");
                    layer.closeAll()
                }
            })
        }
    }
}
