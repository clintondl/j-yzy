const getresponseApiKey = import.meta.env.VITE_GETRESPONSE_API_KEY || "";
const getresponseURI = import.meta.env.VITE_GETRESPONSE_ENDPOINT || "";
const campaignId = import.meta.env.VITE_CAMPAIGN_ID || "";

export const addSubscriber = async (email) => {
  try {
    const res = await fetch(getresponseURI + "/contacts", {
      method: "POST",
      body: JSON.stringify({
        email,
        campaign: {
          campaignId,
        },
      }),
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "api-key " + getresponseApiKey,
      },
    });
    switch (res.status) {
      case 202:
        return { status: "added" };
      case 400:
      case 401:
        return { status: "validation error" };
      case 409:
        return { status: "already exist" };
      case 429:
        return { status: "api limit" };
      default:
        return { status: "failed" };
    }
  } catch (error) {
    return { status: "failed" };
  }
};
