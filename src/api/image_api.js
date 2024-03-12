import { Service } from "@/services/service";

export function ImageRenameApi(data){
    return Service.put("/api/images",data)
}