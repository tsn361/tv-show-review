import axios from "@/helpers/axios";

export default class APIService {
  private static _instance: APIService = new APIService();

  public static getInstance(): APIService {
    return APIService._instance;
  }

  constructor() {
    if (APIService._instance) {
      throw new Error("Use getInstance() instead of new.");
    }
    APIService._instance = this;
  }

  public async getShowDetails(showId: string): Promise<any> {
    const response = await axios.get(`/shows/${showId}?embed=cast`);
    return response.data;
  }

  public async getShows(): Promise<any> {
    const response = await axios.get(`/shows`);
    return response.data;
  }

  public async getSearchResult(query?: string | any): Promise<any> {
    //console.log(query);
    const response = await axios.get(`/search/shows?q=${query}`);
    return response.data;
  }
}
