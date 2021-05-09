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
        topicList: function (id) {

            var data = {};
            data.game_id = id;
            $.ajax({
                url: '../topic/list',
                type: 'post',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result) {
                    if (result.status_code == 200) {
                        location.href = "../view/index";
                    } else {
                        layer.msg(result.message);
                    }
                },
                error: function () {
                    layer.msg('数据异常');
                    layer.closeAll();
                }
            })
        },
        topicAddDialog: function () {
            layui.use('layer', function (layer) {
                layer.open({
                    type: 1
                    , skin: 'examine-refuse-popup'
                    , offset: 'auto'
                    , title: '新增话题'
                    , id: 'layer-id'
                    , area: ['400px', '300px']
                    , content: $("#dialog-edit-topic")
                    , btn: ['确定', '取消']
                    , shade: 0.5 //不显示遮罩
                    , end: function () {
                        $("#dialog-edit-topic").css("display", "none");
                    }
                    , yes: function () {
                        userIndexJs.method.topicAddBtn();
                    }
                    , btn2: function () {

                    }
                });
            });
        },
        topicAddBtn: function () {
            layer.close(layer.index);
            var data = {};
            data.topic_name = $("#edit-topic-name").val();
            data.game_id = $("#edit-game-id").val();
            data.description = $("#edit-description").val();
            if (!data.topic_name) {
                layer.msg("话题名称不允许为空");
                return;
            }
            if (!data.game_id) {
                layer.msg("游戏所属ID不能为空");
                return;
            }
            if (!data.description) {
                layer.msg("话题内容不能为空");
                return;
            }
            $.ajax({
                url: '../user/topic/add',
                type: 'post',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result) {
                    if (result.status_code == 200) {
                        layer.msg('成功');
                    } else {
                        layer.msg(result.message);
                    }
                },
                error: function () {
                    layer.msg('数据异常');
                    layer.closeAll();
                }
            })
        }
    }
}
