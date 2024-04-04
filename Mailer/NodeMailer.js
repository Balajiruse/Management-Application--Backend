
import { createTransport } from "nodemailer";

//creating transport to send mail
export const transport=createTransport({
    service:"gmail",
    auth:{
        user:"bk35037@gmail.com",
        pass:"dmjh baka hjki bdkk"
    },
})
