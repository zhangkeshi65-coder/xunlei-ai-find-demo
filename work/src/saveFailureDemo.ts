// Explicit demo command: fail one file-save attempt in this tab only.
let pending=false;
export function armSaveFailureDemo(){pending=true}
export function consumeSaveFailureDemo(){const shouldFail=pending;pending=false;return shouldFail}
