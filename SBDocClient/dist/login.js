webpackJsonp([7],{240:function(e,n,t){(function(e,n,t,o){new e({el:"#app",data:{username:"",pwd:"",loginPending:!1},methods:{login:function(){var e=this;if(!this.username||!this.pwd)return void this.$message.error("用户名密码不能为空");this.loginPending=!0,n.post("/user/login",{name:e.username,password:e.pwd},{"content-type":"application/x-www-form-urlencoded"}).then(function(n){e.loginPending=!1,200==n.code?(e.$notify({title:"登录成功",type:"success"}),t.clear(),t.update(n.data),setTimeout(function(){location.href="../project/project.html"},1500)):e.$notify({title:n.msg,type:"error"})})}}});o.ready(function(){document.body.onkeydown=function(e){if(13==(window.event||e).keyCode){var n=document.createEvent("HTMLEvents");n.initEvent("click",!0,!0),n.eventType="message",document.getElementById("login").dispatchEvent(n)}}})}).call(n,t(3),t(4),t(2),t(0))}},[240]);