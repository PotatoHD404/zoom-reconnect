// function genJoinUrl(url) {
//     const myURL = new URL(url);
//     myURL.hostname = 'zoom.us';
//     myURL.protocol = 'https:';
//     myURL.pathname = '/wc/join/' + myURL.pathname.split('/').pop();
//     myURL.hash = '';
//     const pwd = myURL.searchParams.get('pwd');
//     myURL.searchParams = new URLSearchParams();
//     if (pwd !== null)
//         myURL.searchParams.append('pwd', pwd);
//     return myURL.href;
// }


String.prototype.isNumeric = function () {
    // console.log(this)
    return /^\d+$/.test(this);
}

function getCredFromUrl(url) {
    const myURL = new URL(url);
    const id = myURL.pathname.split('/').pop();
    const pwd = myURL.searchParams.get('pwd');
    // console.log(!myURL.hostname.toLowerCase().endsWith('zoom.us'));
    // console.log(/^\d+$/.test(id));
    // console.log(id);
    if (!myURL.hostname.toLowerCase().endsWith('zoom.us') || !id.isNumeric())
        throw new Error('Wrong url');

    return {
        id: id,
        pwd: pwd,
    };
}

function genJoinUrl(id, pwd) {
    const myURL = new URL('https://zoom.us');
    // console.log(id)
    // console.log(pwd)
    myURL.pathname = '/wc/join/' + id;
    if (pwd !== null)
        myURL.searchParams.append('pwd', pwd);
    return myURL.href;
}

export {genJoinUrl, getCredFromUrl};