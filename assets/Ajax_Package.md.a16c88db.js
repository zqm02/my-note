import{_ as n,c as t,o as a,a as e}from"./app.545bcdf9.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Ajax/Package.md"}'),s={name:"Ajax/Package.md"},r=e("pre",null,[e("code",null,`function Ajax_get(){
    const xhr = new XMLHttpRequest;
    xhr.open("GET","url",ture);
     const headers = {
      "content-type": "application/json",
    };
    Object.keys(headers).forEach((key) =>
      xhr.setRequestHeader(key, headers[key])
    );

    xhr.send(JSON.stringify(\u6570\u636E));
    xhr.onreadystatechange = function(){
        if(onreadystatechange === 4){
            if(xhr.status >= 200 && xhr.status < 300){
                \u5904\u7406\u7ED3\u679C
            }
        }
    }
}


function Ajax_post(){
    const xhr = new XMLHttpRequest;
    xhr.open("POST","url",true);
      const headers = {
      "content-type": "application/json",
    };
    Object.keys(headers).forEach((key) =>
      xhr.setRequestHeader(key, headers[key])
    );
    xhr.send(JSON.stringify(\u6570\u636E));
    xhr.onreadystatechange = function(){
        if(onreadystatechange === 4){
            if(xhr.status >= 200 && xhr.status < 300){
                \u5904\u7406\u7ED3\u679C
            }
        }
    }
}
`)],-1),o=[r];function c(h,d,i,p,u,x){return a(),t("div",null,o)}var l=n(s,[["render",c]]);export{_ as __pageData,l as default};
