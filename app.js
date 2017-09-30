$(document).ready(function(){
	Bmob.initialize("df83d50740f19e51353a61c47e137cb0", "ce8189b0944aeb0dc5135fb8f59356e3");
	var Tian = Bmob.Object.extend('Tian');
	var tian = new Tian();
	$('#btn').click(function(){
		var name = $('#username').val();
		var xueyuan = $('#xueyuan').val();
		var zhuanye = $('#zhuanye').val();
		var phone = $('#phone').val();
		var fuyi = $('#fuyiren').val();
		var leibie = $('select').val();
		var biaoti = $('#intro').val();
		var	neirong = $('#intro-content').val();
		var liyou = $('#intro-liyou').val();
		var beizhu = $('#intro-beizhu').val();
		console.log(name);
		tian.set("name",name);
		tian.set("xueyuan",xueyuan);
		tian.set("zhuanye",zhuanye);
		tian.set('phone',phone);
		tian.set('fuyiren',fuyi);
		tian.set("leibie",leibie);
		tian.set("biaoti",biaoti);
		tian.set('neirong',neirong);
		tian.set('liyou',liyou);
		tian.set('beizhu',beizhu);
		tian.save(null,{
			success:function(Object){
				console.log('ok');
				$('.gxy').css('display','block');
				$('.queren').click(function(){
					window.location.reload();
				})
				
			},
			error:function(model,error){
				console.log('no');
			}
		})
	})	
})
