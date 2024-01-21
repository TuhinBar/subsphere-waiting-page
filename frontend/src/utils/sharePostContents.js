const handleLinkedInShare = ({ clientDetails }) => {
  const linkedInBaseUrl = "https://www.linkedin.com/";

  const shareMessage = `Exciting news! I just joined the waitlist for SubSphere, the all-in-one membership and subscription management tool for businesses. 🌐✨ Join me and discover the future of subscription management! #SubSphere #SaaS`;

  const url = `${linkedInBaseUrl}shareArticle?mini=true&title=${encodeURIComponent(
    "SAAS Product Waiting List"
  )}&summary=${encodeURIComponent(
    shareMessage
  )}&url=https://waitlist.thesubsphere.com/?ref=${
    clientDetails?.referId
  }&from=linkedin`;

  window.open(url, "linkedin-share-dialog");
};

const handleTwitterShare = ({ clientDetails }) => {
  const twitterBaseUrl = "https://twitter.com/intent/tweet";
  const shareMessage = `🚀 Exciting news! I just joined the waitlist for SubSphere, the all-in-one membership and subscription management tool for businesses. 🌐✨ Join me and discover the future of subscription management! #SubSphere #SaaS`;

  const url = `${twitterBaseUrl}?text=${encodeURIComponent(
    shareMessage
  )}&url=https://waitlist.thesubsphere.com?ref=${clientDetails?.referId}`;

  window.open(url, "twitter-share-dialog");
};

export { handleLinkedInShare, handleTwitterShare };
