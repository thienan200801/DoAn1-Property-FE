import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

export default function ReadMoreText({ baseText, moreText }) {
  const [showFullText, setShowFullText] = useState(false);
  const { t } = useTranslation();

  const showText = () => {
    setShowFullText(true);
  };

  const hideText = () => {
    setShowFullText(false);
  };

  return showFullText ? (
    <div className="mt-2">
      <p className="text-justify">
        <span className="text-primary text-lg font-medium">{`${baseText} `}</span>
        {moreText}
        <button className="ml-1 text-primary font-medium" onClick={hideText}>
          {t("common:an-bot")}
        </button>
      </p>
    </div>
  ) : (
    <div className="flex justify-between mt-2">
      <p className="font-medium text-lg text-primary">{baseText}</p>
      <button className="text-primary font-medium" onClick={showText}>
        {t("common:xem-them")}
      </button>
    </div>
  );
}
