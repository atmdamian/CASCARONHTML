/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var login = new Login;

function Login(){
    
    Login.prototype.setUsuario = function (usuario){
        usuarios = usuario;
        //console.log(personas);
    };

    Login.prototype.getUsuario = function (){
        return usuarios;
    };   
    
    Login.prototype.FormLogin = function (){
        
        var component = 'login.html';
        
        $.ajax({
            mimeType: 'text/html; charset=utf-8', 
            url: component,
            type: 'GET',
            dataType: "html",
            async: true,
            success: function(data) {
                $('#loginContenedor').html(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });        
        
    };

    var usuario;
    
}

login.FormLogin();






