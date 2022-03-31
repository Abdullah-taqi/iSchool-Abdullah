function refresh(){
    $.ajax({
        url : "/data",
        success : function(res, statusText, jqxhr){
            $("#usergrid").html("");
            $(res).each(function(idx){
                $("#usergrid").append(`
                <tr>
                    <th scope='row'>${idx+1}</th>
                    <td>${res[idx].username}</td>
                    <td>${res[idx].usermail}</td>
                    <td>${res[idx].usercity}</td>
                    <td><button data-edit="${res[idx]._id}" class="btn btn-warning"> Edit </button></td>
                    <td><button data-del="${res[idx]._id}" class="btn btn-danger"> Delete </button></td>
                </tr>`)
            });
        },
        error : function(jqXHR,statusText,error){
            console.log("Error ", error)
        }
    })
}

//----------------------------------------
function deleteUserHandler(evt){
    // alert("you clicked the delete button : "+evt.target.getAttribute("data-vijay"));
    // alert("you clicked "+$(evt.target).attr("data-vijay"));
    $.ajax({
        method : 'delete',
        url : "/delete/"+$(evt.target).attr("data-del"),
        success : function(res){
            console.log(res);
            refresh();
        },
        error : function(err){
            console.log("Error ",err)
        }
    })
}

//-------------------------------------
function editUserHandler(evt){
    $("#edituserbox").show(500);
    $("#adduserbox").hide(500);
    // alert("are you sure you want to edit the info")
    $.ajax({
        method : 'get',
        url : "/edit/"+$(evt.target).attr("data-edit"),
        success : function(res){
            // console.log(res);
            $("#edit_username").val(res.username);
            $("#edit_usermail").val(res.usermail);
            $("#edit_usercity").val(res.usercity);
            $("#edit_userid").val(res._id);
            // $("#editBtn").attr("data-userid",res._id);
        },
        error : function(err){
            console.log("Error ",err)
        }
    })
    };

function updateUserHandler(){
    let updatedUser = {
        username : $("#edit_username").val(),
        usermail : $("#edit_usermail").val(),
        usercity : $("#edit_usercity").val()
    };
    $.ajax({
            method : 'post',
            url : "/edit/"+$("#edit_userid").val(),
            data : JSON.stringify(updatedUser),
            contentType : "application/json",
            dataType : "json",
            success : function(res){
                $("#edituserbox").hide(500);
                $("#adduserbox").show(500);
                $("#edit_username").val('');
                $("#edit_usermail").val('');
                $("#edit_usercity").val('');
                refresh();
                console.log(res.updatedmessage);
            },
            error : function(err){
                console.log("Error ",err)
            }
        })
}
function addUserHandler(){
    if($("#username").val() || $("#usermail").val() || $("#usercity").val()){
        let nuser = {
            username : $("#username").val(),
            usermail : $("#usermail").val(),
            usercity : $("#usercity").val()
        };
        console.log(nuser);
        $.ajax({
            method : 'post',
            url : "/add",
            data : JSON.stringify(nuser),
            contentType : "application/json",
            dataType : "json",
            success : function(res){
                $("#username").val('');
                $("#usermail").val('');
                $("#usercity").val('');
                refresh();
            },
            error : function(err){
                console.log("Error ",err)
            }
        })
    }else{
        alert("please fill all user details")
    }
}