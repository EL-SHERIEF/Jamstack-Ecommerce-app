const {default: axiosClient} = require("./axiosClient")
const HomePage = ()=>axiosClient.get('/home-page?populate=*')
const DetailsPage = ()=>axiosClient.get('/details-page?populate=*')
const Header = ()=>axiosClient.get('/Header?populate=*')

export default {
    HomePage,DetailsPage,Header
}