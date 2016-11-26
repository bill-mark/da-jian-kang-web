function displaySubMenu(li) { 
	var subMenu = li.getElementsByTagName("ul")[0]; 
	subMenu.style.display = "block"; 
} 
function hideSubMenu(li) { 
	var subMenu = li.getElementsByTagName("ul")[0]; 
	subMenu.style.display = "none"; 
} 


function changeweb(obj,id){
         //obj.className="in-li2"; //更换点击后背景色
         var iframe = document.getElementById('iframe');
         var chg = id+'.html';  //拼接html文件    
         iframe.setAttribute("src",chg); //设置对象的属性        
}
function changeweb2(obj,id){
         //window.loaction.href="index.html";
         scrollTo(0,0);
         var iframe = document.getElementById('iframe');
         var chg = id+'.html';  //拼接html文件    
         iframe.setAttribute("src",chg); //设置对象的属性        
}