
"use server";


function EmailReplaceScript() {
    if(typeof document !== 'undefined') {
        
        /* 1. define variables */
        var me = "name";
        var place = "host.tld";

        /* 2. find email link to replace */
        var elink = document.getElementById("mlink");

        /* 3. replace link href with variables  */
        elink.href = `mailto:${me}@${place}`;
    }

}

export default EmailReplaceScript