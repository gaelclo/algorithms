function computeIP(ip) {
  if(!ip || ip.length<4 || ip.charAt(0)=='0') return;
  let addresses = []; 
  decompose(ip, '', 0, addresses);
  return addresses;
}

function decompose(rest, build, segment, addresses) {
  //console.log('rest: '+rest+' build: '+build+' segment: '+segment);
  if(segment==4 && rest.length==0) {
    addresses.push(build);
  }
  else if(segment<4) {
    for(let i=1; i<4 && rest.length>=i;i++) {
      let snippet = rest.substring(0,i);
      let snippetInt = parseInt(rest.substring(0,i));

      if((snippet.charAt(0)=='0' && i>1) || snippetInt>255)
         return;
        
      let nRest = rest.substring(i);
      let nBuild = !build?snippet:build+'.'+snippet;
      
      decompose(nRest, nBuild, segment+1, addresses);
    }
  }
}

let ip = "255255091";
computeIP(ip);