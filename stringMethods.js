let urls='https://www.producthunt.com/product<script>s/links-list/a!lternatives';
let improved_urls=urls.replaceAll('<','').replaceAll('>','').replaceAll('script','').replaceAll('!','').replaceAll('@','').replaceAll('%','');
console.log(improved_urls);
let short_url;
let user_search;
let topDomain;
if(improved_urls.includes('/search')){
    short_url=improved_urls.slice(0,improved_urls.indexOf('/search'));
    short_url=improved_urls.slice(0,improved_urls.indexOf('/search'));
    console.log(short_url);
    user_search=short_url.slice(short_url.indexOf('.'),short_url.lastIndexOf('.'));
    console.log(user_search);
    topDomain=short_url.slice(-4);
    console.log(topDomain);

}
else{
    short_url=improved_urls.split('/',4);
    console.log(short_url[2]);
    user_search=short_url[3];
    console.log(user_search);
    topDomain=short_url[2].slice(-4);
    console.log(topDomain);
}