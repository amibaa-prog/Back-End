let url1="https://www.!google!.com/search?q=javascript+<script></script>call+stack&client=firefox-<Error>b-d&sxsrf=!!AJOqlzWfGkxZ1eRCAYIlibIdMN387lSQXw:1676044481612&$$source=$$lnms&tbm=isch&sa=(444)X&ved=2ahUKEwj70dCfqIv9AhUxTKQEHe_0AVIQ_AUoAXoECA_|E|_QAw&biw=1920&bih=966&dpr=1#imgrc=ttQhggGNsUomkM";
function fixlink(url) {
    console.log(url.replaceAll('<','').replaceAll('>','').replaceAll('script','').replaceAll('!','').replaceAll('@','').replaceAll('%','')); 
}
function checkfixedlink(url) {
    if (!String(url).includes('<') && !String(url).includes('>') && !String(url).includes('script') && !String(url).includes('!') && !String(url).includes('@') && !String(url).includes('%')) {
        return "finished";

    }else {
        return checkfixedlink(fixlink(url));
    }
}
checkfixedlink(url1);