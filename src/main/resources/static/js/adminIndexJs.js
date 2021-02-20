$(function () {
    adminIndexJs.bindEvent();
});
var adminIndexJs = {
    bindEvent: function () {
        adminIndexJs.event.gameList();
    },
    event: {
        gameList: function () {
            layui.use('table', function () {
                var table = layui.table;
                $("#game-list").removeClass('layui-hide');
                $("#topic-list").addClass('layui-hide');
                $("#comment-list").addClass('layui-hide');
                $("#message-tab").addClass('layui-hide');
                $("#history-list").addClass('layui-hide');
                $("#user-list").addClass('layui-hide');
                table.render({
                    elem: '#game-list-table'
                    , height: 485
                    , url: '../admin/game/list'
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
    },
    method: {
        addGameDialog: function () {
            layui.use('layer', function (layer) {
                layer.open({
                    type: 1
                    , skin: 'examine-refuse-popup'
                    , offset: 'auto'
                    , title: '新增游戏'
                    , id: 'layer-id'
                    , area: ['600px', '500px']
                    , content: $("#dialog-edit-game")
                    , btn: ['确定', '取消']
                    , shade: 0.5 //不显示遮罩
                    , end: function () {
                        $("#dialog-edit-game").css("display", "none");
                    }
                    , yes: function () {
                        adminIndexJs.method.editGameBtn('add');
                    }
                    , btn2: function () {

                    }
                });
            });
        },
        editGameBtn: function (type) {
            layer.close(layer.index);
            var data = {};
            data.id = $("#dialog-edit-game").data("id");
            data.game_name = $("#edit-game-name").val();
            data.description = $("#edit-description").val();
            data.cover = $("#edit-cover").attr('src');
            data.game_type = $("input[name='edit-game-type']:checked").val();
            if (!data.game_name) {
                layer.msg("游戏名称不允许为空");
                return;
            }
            if (!data.description) {
                layer.msg("游戏描述不允许为空");
                return;
            }
            if (!data.cover) {
                layer.msg("游戏封面不允许为空");
                return;
            }
            var url = '../admin/game/add';
            if (type == 'update') {
                url = '../admin/game/update';
            }
            $.ajax({
                url: url,
                type: 'post',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result) {
                    if (result.status_code == 200) {
                        layer.msg('成功');
                        adminIndexJs.event.gameList();
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
        topicList: function () {
            layui.use('table', function () {
                var table = layui.table;
                $("#topic-list").removeClass('layui-hide');
                $("#game-list").addClass('layui-hide');
                $("#comment-list").addClass('layui-hide');
                $("#message-tab").addClass('layui-hide');
                $("#history-list").addClass('layui-hide');
                $("#user-list").addClass('layui-hide');
                table.render({
                    elem: '#topic-list-table'
                    , height: 485
                    , url: '../admin/topic/list'
                    , page: true //开启分页
                    , limits: [5, 10, 20]
                    , limit: 10
                    , cols: [[ //表头
                        {field: 'id', title: '话题编号', width: 100}
                        , {field: 'topicName', title: '话题名称', width: 120}
                        , {field: 'userName', title: '话题发布者', width: 120}
                        , {field: 'gameName', title: '所属游戏', width: 140}
                        , {field: 'description', title: '描述', width: 170}
                        , {field: 'recommendStatusStr', title: '推荐状态', width: 110}
                        , {field: 'verifyStatusStr', title: '审核状态', width: 110}
                        , {field: 'createTimeStr', title: '创建时间', width: 180}
                        , {field: 'updateTimeStr', title: '修改时间', width: 180}
                        , {
                            field: 'operate1',
                            title: '审核',
                            toolbar: "#topic-list-table-operate-verify"
                        }
                        , {
                            field: 'operate2',
                            title: '推荐',
                            toolbar: "#topic-list-table-operate-recommend"
                        }
                    ]]
                });
                table.on('tool(topic-list-table-fit)', function (obj) {
                    if (obj.event === 'pass') {
                        adminIndexJs.method.commonAuditTopic('确定通过审核吗？', obj.data.id, 1);
                    } else if (obj.event == 'noPass') {
                        adminIndexJs.method.commonAuditTopic('确定拒绝通过吗？', obj.data.id, -1);
                    } else if (obj.event == 'recommend') {
                        adminIndexJs.method.commonRecommendTopic('确定推荐该话题吗？', obj.data.id, 1);
                    } else {
                        adminIndexJs.method.commonRecommendTopic('确定取消推荐该话题吗？', obj.data.id, 0);
                    }
                })
            });
        },
        commonAuditTopic: function (text, id, status) {
            layer.confirm(text, function (index) {
                $.ajax({
                    url: '../admin/topic/verify',
                    data: {
                        id: id,
                        status: status
                    },
                    type: 'get',
                    success: function (result) {
                        if (result.status_code == 200) {
                            layer.msg("审核完成");
                            adminIndexJs.method.topicList();
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
        },
        commonRecommendTopic: function (text, id, status) {
            layer.confirm(text, function (index) {
                $.ajax({
                    url: '../admin/topic/recommend',
                    data: {
                        id: id,
                        status: status
                    },
                    type: 'get',
                    success: function (result) {
                        if (result.status_code == 200) {
                            layer.msg("推荐成功");
                            adminIndexJs.method.topicList();
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
        },
        commentList: function () {
            layui.use('table', function () {
                var table = layui.table;
                $("#comment-list").removeClass('layui-hide');
                $("#topic-list").addClass('layui-hide');
                $("#game-list").addClass('layui-hide');
                $("#message-tab").addClass('layui-hide');
                $("#history-list").addClass('layui-hide');
                $("#user-list").addClass('layui-hide');
                table.render({
                    elem: '#comment-list-table'
                    , height: 485
                    , url: '../admin/comment/list'
                    , page: true //开启分页
                    , limits: [5, 10, 20]
                    , limit: 10
                    , cols: [[ //表头
                        {field: 'id', title: '评论编号', width: 100}
                        , {field: 'topicId', title: '话题编号', width: 100}
                        , {field: 'topicName', title: '话题名称', width: 150}
                        , {field: 'userName', title: '评论发布者', width: 150}
                        , {field: 'content', title: '评论内容', width: 300}
                        , {field: 'statusStr', title: '审核状态', width: 110}
                        , {field: 'createTimeStr', title: '创建时间', width: 220}
                        , {field: 'updateTimeStr', title: '评论时间', width: 220}
                        , {
                            field: 'operate',
                            title: '审核',
                            toolbar: "#comment-list-table-operate"
                        }
                    ]]
                });
                table.on('tool(comment-list-table-fit)', function (obj) {
                    if (obj.event === 'pass') {
                        adminIndexJs.method.commonAuditComment('确定通过审核吗？', obj.data.id, 1);
                    } else if (obj.event == 'noPass') {
                        adminIndexJs.method.commonAuditComment('确定拒绝通过吗？', obj.data.id, -1);
                    }
                })
            });
        },
        commonAuditComment: function (text, id, status) {
            layer.confirm(text, function (index) {
                $.ajax({
                    url: '../admin/comment/verify',
                    data: {
                        id: id,
                        status: status
                    },
                    type: 'get',
                    success: function (result) {
                        if (result.status_code == 200) {
                            layer.msg("审核完成");
                            adminIndexJs.method.commentList();
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
        },
        messageList: function () {
            layui.use('table', function () {
                var table = layui.table;
                $("#message-tab").removeClass('layui-hide');
                $("#comment-list").addClass('layui-hide');
                $("#topic-list").addClass('layui-hide');
                $("#game-list").addClass('layui-hide');
                $("#history-list").addClass('layui-hide');
                $("#user-list").addClass('layui-hide');
                table.render({
                    elem: '#comment-list-table'
                    , height: 485
                    , url: '../user-apply/comment-list'
                    , page: true //开启分页
                    , limits: [5, 10, 20]
                    , limit: 10
                    , cols: [[ //表头
                        {field: 'id', title: '编号', width: 70}
                        , {field: 'game_info_id', title: '兼职编号', width: 100}
                        , {field: 'title', title: '申请的主题', width: 150}
                        , {field: 'user_name', title: '申请者', width: 110}
                        , {field: 'phone', title: '申请者联系方式', width: 150}
                        , {field: 'sex_str', title: '性别', width: 80}
                        , {field: 'age', title: '年龄', width: 80}
                        , {field: 'school', title: '学校', width: 140}
                        , {field: 'status_str', title: '状态', width: 120}
                        , {field: 'create_time', title: '申请时间'}
                    ]]
                });
            });
        },
        historyList: function () {
            layui.use('table', function () {
                var table = layui.table;
                $("#history-list").removeClass('layui-hide');
                $("#comment-list").addClass('layui-hide');
                $("#topic-list").addClass('layui-hide');
                $("#game-list").addClass('layui-hide');
                $("#message-tab").addClass('layui-hide');
                $("#user-list").addClass('layui-hide');
                layui.use('laytpl', function () {
                    var laytpl = layui.laytpl;
                    var getTpl = document.getElementById("admin-operate-record-list").innerHTML;
                    layer.load();
                    $.ajax({
                        url: '../admin/operate/list',
                        data: {
                            key: $("#key-search").val()
                        },
                        type: 'post',
                        success: function (result) {
                            layer.closeAll('loading');
                            laytpl(getTpl).render(result, function (html) {
                                document.getElementById("history-list").innerHTML = html;
                            });
                        },
                        error: function () {
                            layer.msg("数据请求异常");
                        }
                    })
                })
            });
        },
        showLocationByMap: function (dom) {
            var id = $(dom).data("id");
            $.ajax({
                url: '../common/get-location',
                type: 'get',
                data: {
                    ip: $("#"+id).html(),
                },
                success: function (result) {
                    result = eval("(" + result.message + ")");
                    adminIndexJs.method.showMap(result.content.point.x, result.content.point.y)
                },
                error: function () {
                    layer.msg("获取定位失败")
                }
            })

        },
        showMap: function (x, y) {
            // 百度地图API功能
            var map = new BMap.Map("allmap");    // 创建Map实例
            map.centerAndZoom(new BMap.Point(x, y), 11);  // 初始化地图,设置中心点坐标和地图级别
            //添加地图类型控件
            map.addControl(new BMap.MapTypeControl({
                mapTypes:[
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                ]}));
            map.setCurrentCity("泉州");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            var new_point = new BMap.Point(x, y);
            var marker = new BMap.Marker(new_point);  // 创建标注
            map.addOverlay(marker);              // 将标注添加到地图中
            map.panTo(new_point);
            layui.use(['layer', 'form'], function (layer, form) {
                layer.open({
                    type: 1
                    , skin: 'examine-refuse-popup'
                    , offset: 'auto'
                    , title: '地图'
                    , id: 'layer-id'
                    , area: ['750px', '550px']
                    , content: $("#map-popup")
                    , btn: ['确定', '取消']
                    , shade: 0.5 //不显示遮罩
                    , end: function () {
                        $("#map-popup").css("display", "none");
                    }
                });
            });
        },
        userList: function () {
            layui.use('table', function () {
                var table = layui.table;
                $("#user-list").removeClass('layui-hide');
                $("#topic-list").addClass('layui-hide');
                $("#game-list").addClass('layui-hide');
                $("#message-tab").addClass('layui-hide');
                $("#comment-list").addClass('layui-hide');
                $("#history-list").addClass('layui-hide');
                table.render({
                    elem: '#user-list-table'
                    , height: 485
                    , url: '../admin/user/list'
                    , page: true //开启分页
                    , limits: [5, 10, 20]
                    , limit: 10
                    , cols: [[ //表头
                        {field: 'id', title: '用户编号', width: 110}
                        , {field: 'userName', title: '用户名', width: 150}
                        , {field: 'mobile', title: '手机号', width: 150}
                        , {field: 'password', title: '密码', width: 180}
                        , {field: 'description', title: '简介', width: 200}
                        , {
                            field: 'portrait', title: '头像', width: 100, templet: function (d) {
                                return '<div onclick="adminIndexJs.method.show_img(this)" ><img src="' + d.portrait + '" alt="" width="50px" height="50px"></a></div>';
                            }
                        }
                        , {field: 'createTimeStr', title: '创建时间', width: 200}
                        , {field: 'updateTimeStr', title: '修改时间', width: 200}
                        , {field: 'statusStr', title: '状态', width: 100}
                        , {
                            field: 'operate',
                            title: '操作',
                            toolbar: "#user-list-table-operate"
                        }
                    ]]
                });
                table.on('tool(user-list-table-fit)', function (obj) {
                    if (obj.event === 'pass') {
                        adminIndexJs.method.commonAuditUser('确定通过审核吗？', obj.data.id, 1);
                    } else {
                        adminIndexJs.method.commonAuditUser('确定拒绝通过吗？', obj.data.id, -1);
                    }
                })
            });
        },
        commonAuditUser: function (text, id, status) {
            layer.confirm(text, function (index) {
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
            })
        },
        show_img: function (t) {
            var t = $(t).find("img");
            //页面层
            layer.open({
                type: 1,
                title: '头像',
                skin: 'layui-layer-rim', //加上边框
                area: ['80%', '80%'], //宽高
                shadeClose: true, //开启遮罩关闭
                end: function (index, layero) {
                    return false;
                },
                content: '<div style="text-align:center"><img src="' + $(t).attr('src') + '" /></div>'
            });
        },
    }
}
