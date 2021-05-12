$(function () {
    userIndexJs.bindEvent();
});
var userIndexJs = {
    bindEvent: function () {
        this.method.userTopicList();
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
        },
        topicComment: function (topicId) {
            var data = {};
            data.topic_id = topicId;
            data.content = $("#comment-content").val();
            console.log(data.content);
            $.ajax({
                url: '../../user/comment/add',
                type: 'post',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result) {
                    if (result.status_code == 200) {
                        layer.msg("评论成功，等待管理员审核");
                        // setTimeout(function () {
                        //     location.reload();
                        // },500)
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
        userTopicList: function () {
            layui.use('table', function () {
                var table = layui.table;
                $("#topic-list").removeClass('layui-hide');
                table.render({
                    elem: '#topic-list-table'
                    , height: 485
                    , url: '../user/topic/list'
                    , page: true //开启分页
                    , limits: [5, 10, 20]
                    , limit: 10
                    , cols: [[ //表头
                        {field: 'id', title: '游戏编号', width: 120}
                        , {field: 'gameName', title: '游戏名称', width: 240}
                        , {
                            field: 'cover', title: '封面图', width: 100, templet: function (d) {
                                return '<div onclick="adminIndexJs.method.show_img(this)" ><img src="' + d.cover + '" alt="" width="50px" height="50px"></a></div>';
                            }
                        }
                        , {field: 'description', title: '游戏描述', width: 300}
                        , {field: 'createTimeStr', title: '创建时间', width: 220}
                        , {field: 'updateTimeStr', title: '修改时间', width: 220}
                        , {field: 'gameTypeStr', title: '类型', width: 190}
                        , {
                            field: 'operate',
                            title: '操作',
                            toolbar: "#game-list-table-operate"
                        }
                    ]]
                });
                table.on('tool(game-list-table-fit)', function (obj) {
                    if (obj.event === 'delete') {
                        layer.confirm('确定在社区删除该游戏？删除后不可恢复！', function (index) {
                            $.ajax({
                                url: '../admin/game/delete',
                                data: {
                                    gameId: obj.data.id
                                },
                                type: 'get',
                                success: function (result) {
                                    if (result.status_code == 200) {
                                        layer.msg("删除成功");
                                        adminIndexJs.event.gameList();
                                    } else {
                                        layer.msg(result.message);
                                    }
                                },
                                error: function () {
                                    layer.msg("数据请求异常");
                                    layer.closeAll()
                                }
                            })
                        })
                    } else {
                        $.ajax({
                            url: '/admin/game/get',
                            data: {
                                gameId: obj.data.id
                            },
                            type: 'get',
                            success: function (result) {
                                $("#edit-game-name").val(result.vo.gameName);
                                $("#edit-description").val(result.vo.description);
                                $("#edit-cover").attr('src', result.vo.cover);
                                $("#dialog-edit-game").data("id", result.vo.id);
                                if (result.vo.gameTypeStr == '热门游戏') {
                                    $("input:radio[value=2]").attr("checked", 'true');
                                } else if (result.vo.gameTypeStr == '推荐游戏') {
                                    $("input:radio[value=1]").attr("checked", 'true');
                                }
                                layui.use(['layer', 'form'], function (layer, form) {
                                    layer.open({
                                        type: 1
                                        , skin: 'examine-refuse-popup'
                                        , offset: 'auto'
                                        , title: '编辑游戏信息'
                                        , id: 'layer-id'
                                        , area: ['600px', '500px']
                                        , content: $("#dialog-edit-game")
                                        , btn: ['确定', '取消']
                                        , shade: 0.5 //不显示遮罩
                                        , end: function () {
                                            $("#dialog-edit-game").css("display", "none");
                                        }
                                        , yes: function () {
                                            adminIndexJs.method.editGameBtn('update');
                                        },
                                        btn2: function () {

                                        }
                                    });
                                });
                            }
                        })
                    }
                })
            });
        }
    }
}
