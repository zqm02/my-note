    ```js
    function Ajax_get(){
        const xhr = new XMLHttpRequest;
        xhr.open("GET","url",ture);
         const headers = {
          "content-type": "application/json",
        };
        Object.keys(headers).forEach((key) =>
          xhr.setRequestHeader(key, headers[key])
        );

        xhr.send(JSON.stringify(数据));
        xhr.onreadystatechange = function(){
            if(onreadystatechange === 4){
                if(xhr.status >= 200 && xhr.status < 300){
                    处理结果
                }
            }
        }
    }

````
```js
    function Ajax_post(){
        const xhr = new XMLHttpRequest;
        xhr.open("POST","url",true);
          const headers = {
          "content-type": "application/json",
        };
        Object.keys(headers).forEach((key) =>
          xhr.setRequestHeader(key, headers[key])
        );
        xhr.send(JSON.stringify(数据));
        xhr.onreadystatechange = function(){
            if(onreadystatechange === 4){
                if(xhr.status >= 200 && xhr.status < 300){
                    处理结果
                }
            }
        }
    }
````
