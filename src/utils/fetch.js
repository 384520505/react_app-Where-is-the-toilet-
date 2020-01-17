// 数据请求



export const  fetchNews = (type) => {
    return (
        fetch(`http://zhouxunwang.cn/data/?id=75&key=B+DPqtNhSdz+jJiL9Yo0Q2zEOwTgsJeZ/px16A&type=${type}`)
        .then((respones) => respones.json())
        .then((data) => {
            // console.warn(data.reason)
            return data.result;
        })
        .catch(error => {
            console.warn(error);
            return error;
        })
    );
}