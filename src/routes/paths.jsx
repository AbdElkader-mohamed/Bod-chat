// to set main rout without mistakes and make one path 

function path(root,subLink) {
  return `${root}${subLink}`
}

const ROOT_DASHBOARD = '/' ;

export const DASHBOARD_ROUTES = {
  root : ROOT_DASHBOARD ,
  general : {app: path(ROOT_DASHBOARD,'app')}
}