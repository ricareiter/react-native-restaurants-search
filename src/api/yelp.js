import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer ePGHUg1YFPIIGPV9JDNMTADdhWrIbdzWUux9dShiCaimIUBNme9axM2Cqed8C05X6ccdn7EYsCjPmYgLL7pRN2rfgZXxeFi3zV0_QaneNjrBPMSgU9X6GpjfaAONYnYx",
  },
});
