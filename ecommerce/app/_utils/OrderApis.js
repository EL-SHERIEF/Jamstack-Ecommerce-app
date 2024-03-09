const {default: axiosClient} = require("./axiosClient");

const createOrder = (data) => axiosClient.post('/orders',data);
const getLatestOrders = (email)=>axiosClient.get(`/orders?populate[products][populate]=banner&filters[email][$eq]=${email}`)
export default{createOrder,getLatestOrders};