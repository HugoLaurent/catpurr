import { useEffect, useState } from "react";

import { Card } from "flowbite-react";

function CardCandidate() {
  const [catImage, setCatImage] = useState("");

  useEffect(() => {
    fetch(
      "https://api.thecatapi.com/v1/images/search?api_key=live_AhQxyKCfuhM9qBo7e6nypYT2KyHucH8UWsftRFGLLkAMGcdNCIUH9LrueujB0eZl"
    )
      .then((response) => response.json())
      .then((data) => {
        setCatImage(data[0].url);
      });
  }, []);

  console.log(catImage);
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={catImage}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Card>
  );
}

export default CardCandidate;
