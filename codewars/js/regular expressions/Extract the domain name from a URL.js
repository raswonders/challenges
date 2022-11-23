function domainName(url){
  const domainRE = /(https?:\/\/)?(www\.)?(?<domain>[^\.]+)\./
  
  return url.match(domainRE).groups.domain;
}