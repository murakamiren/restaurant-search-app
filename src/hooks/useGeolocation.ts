import { useEffect, useState } from "react";

export const useGeolocation = () => {
  const [currentPos, setCurrentPos] = useState<GeolocationPosition | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCurrentPos(() => pos);
        setErrorMessage(() => null);
      },
      (error) => {
        switch (error.code) {
          case 1:
            setErrorMessage(() => "位置情報の利用が許可されていません");
            break;
          case 2:
            setErrorMessage(() => "位置情報が取得できませんでした");
            break;
          case 3:
            setErrorMessage(() => "タイムアウトになりました");
            break;
          default:
            setErrorMessage(() => "エラー");
            break;
        }
      },
      { enableHighAccuracy: true },
    );
  }, []);

  return { currentPos, errorMessage };
};
