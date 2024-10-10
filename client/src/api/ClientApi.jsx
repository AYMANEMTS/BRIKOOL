import {axiosClient} from "./axios";

const ClientApi = {
    login: async (data) => await axiosClient.post("/login",data).then((res) => res),
    logout: async () => await axiosClient.post("/logout").then((res) => res),
    checkAuth: async () => await axiosClient.get("/check-auth").then((res) => res),
}
export default ClientApi