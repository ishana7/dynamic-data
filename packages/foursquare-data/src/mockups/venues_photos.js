// Endpoint => GET =>  https://api.foursquare.com/v2/venues/{venue_id}/photos
// Parameters:
// ================================================================================================================================================================================================================================================================================
// | Name          | Type   | Description                                                                                                                                                                                                                                         |
// ================================================================================================================================================================================================================================================================================
// | venue_id      | string | The venue you want photos for; e.g., Foursquare HQ's venue_id = 5a187743ccad6b307315e6fe                                                                                                                                                            |
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | client_id     | string | The unique ID associated with your developer project. Required if using "Userless" authentication.                                                                                                                                                  |
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | client_secret | string | The unique secret value associated with your developer project. Required if using "Userless" authentication.                                                                                                                                        |
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | oauth_token   | string | The access token generated via your web application as described here. Required if using "User" authentication.                                                                                                                                     |
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | group         | string | If not specified, public venue photos are returned ordered by relevance. Pass venue for public venue photos, ordered by recency. Pass checkin for venue photos from friends (including non-public photos from recent checkins), ordered by recency. |
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | limit         | int32  | Number of results to return; up to 50.                                                                                                                                                                                                              |
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | offset        | int32  | Used to page through results, up to 50.                                                                                                                                                                                                             |
// ================================================================================================================================================================================================================================================================================


export const venues_photos = {
  meta: {
    code: 200,
    requestId: "5997070d6a60717704801060"
  },
  response: {
    photos: {
      count: 1,
      items: [
        {
          id: "51e4151c498e60b5d17bc721",
          createdAt: 1373902108,
          source: {
            name: "Instagram",
            url: "http://instagram.com"
          },
          prefix: "https://igx.4sqi.net/img/general/",
          suffix: "/1022386_wEd7VXnWzp5lajvRLtAPunoiufDSIq8PMEtEuIH2Tzg.jpg",
          width: 612,
          height: 612,
          user: {
            firstName: "John",
            lastName: "D",
            countryCode: "US"
          },
          checkin: {
            id: "51e4151b498ea66547febfaf",
            createdAt: 1373902107,
            type: "checkin",
            timeZoneOffset: -240
          },
          visibility: "public"
        }
      ],
      dupesRemoved: 0
    }
  }
};