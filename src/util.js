export const hasPermission = (authentication, modu, func) => {

  const permissions = authentication && authentication.payload && authentication.payload.data && authentication.payload.data.permissions || []
  const role = authentication && authentication.payload && authentication.payload.data && authentication.payload.data.role

  let isAllowed = true
  for(let i = 0; i < permissions.length; i++) {
    const permission = permissions[i]
    const permissionModu = permission.module
    if(permissionModu.name == modu) {
      isAllowed = permissionModu.roles.indexOf(role) > -1

      if(!func) break;

      const functions = permission.functions
      for(let j = 0; j < functions.length; j++) {
        const permissionFunc = functions[j]
        if(func == permissionFunc.name) {
          isAllowed = permissionFunc.roles.indexOf(role) > -1
          break
        }
      }
      break
    }

  }

  return isAllowed
}