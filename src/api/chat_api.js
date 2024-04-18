import { Service } from "@/services/service";

export function chatApi(params){
    return Service.get("/api/chat_groups_records",{params})
}