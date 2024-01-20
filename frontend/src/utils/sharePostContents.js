const handleLinkedInShare = () => {
  const linkedInBaseUrl = "https://www.linkedin.com/";
  const url = `${linkedInBaseUrl}?mini=true&url=${
    window.location.href
  }&title=${encodeURIComponent("Arian")}`;

  //   window.open(url, "_blank");
  window.open(
    "https://www.linkedin.com/shareArticle?mini=true&text=what are you waiting for?&url=https://www.example.com",
    "linkedin",
    "height=500,width=550,resizable=1"
  );
};

export { handleLinkedInShare };
