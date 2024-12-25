import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 3yFW2wUKsvv8oRm_NjkfEm5bttl6LLqHc49IjCtDtIPkI6ZggMzP102FqSkki_-CfvpmbwHSwvm6bC0jLieTQJSZqscH0kmWk6JojZQQX6QhFe18-HdWlwVvWWIrZ3Yx",
  },
});
