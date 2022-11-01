import React, { FC, useEffect, useState } from "react";
import { useRequest, setPageNavBar } from "alita";
import { weather, lookUp } from "./service";
import { calendar } from "@/utils/calendar";
import moment from "moment";
import addressIcon from "@/assets/address.png";
import config from "../../config/config";
import styles from "./index.less";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = (props) => {
  const { location = "", adm = "" } = props.location.query;
  const [currentDate, setDate] = useState(new Date());
  const [weatherData, setWeather] = useState({});
  const [cityInfo, setCityInfo] = useState({});
  const [nusicInfo, setMusicInfo] = useState({});
  const { musicLst } = config;

  // 列表请求
  const queryweather = () => {
    if (JSON.stringify(cityInfo) === "{}") {
      return;
    }
    return new Promise(async (res, rej) => {
      try {
        const data = await weather(cityInfo.id);
        setWeather(data);
        console.log("weatherData--->", data);
      } catch (error) {}
    });
  };

  const getCityInfo = () => {
    return new Promise(async (res, rej) => {
      try {
        const data = await lookUp({ location, adm });
        setCityInfo(data.location[0]);
        console.log("getCityInfo--->", data);
      } catch (error) {}
    });
  };

  const getMusicInfo = () => {
    const nusicInfoTemp = musicLst[Math.floor(Math.random() * musicLst.length)];
    console.log("getMusicInfo", nusicInfoTemp);
    setMusicInfo(nusicInfoTemp);
  };

  useEffect(() => {
    queryweather();
  }, [cityInfo]);

  useEffect(() => {
    getCityInfo();
    getMusicInfo();
  }, []);

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);

    setInterval(() => {
      queryweather();
      getLunarCalendar();
    }, 1000 * 60 * 60);

    setInterval(() => {
      getMusicInfo();
    }, 1000 * 60 * 10);
  }, []);

  useEffect(() => {
    setPageNavBar({
      pagePath: "/",
      navBar: {
        hideNavBar: true,
      },
    });
  }, []);

  const getWeek = () => {
    // 参数时间戳
    let week = moment(currentDate).day();
    switch (week) {
      case 1:
        return "星期一";
      case 2:
        return "星期二";
      case 3:
        return "星期三";
      case 4:
        return "星期四";
      case 5:
        return "星期五";
      case 6:
        return "星期六";
      case 0:
        return "星期日";
    }
  };

  const getLunarCalendar = () => {
    const bean = calendar.solar2lunar(
      moment(currentDate).format("YYYY"),
      moment(currentDate).format("MM"),
      moment(currentDate).format("DD")
    );
    return bean.gzYear + "年" + bean.IMonthCn + bean.IDayCn;
  };
  return (
    <div className={styles.content}>
      <div className={styles.date}>
        {moment(currentDate).format("YYYY年MM月DD日")}
      </div>
      <div className={styles.date}>{getWeek()}</div>
      <div className={styles.chineseDate}>{getLunarCalendar()}</div>
      <div className={styles.time}>
        {moment(currentDate).format("HH:mm:ss")}
      </div>

      <div className={styles.weather}>
        <div className={styles.city}>
          <img src={addressIcon} className={styles.icon} alt="" />
          <div className={styles.cityName}>
            {cityInfo?.adm2 + "市-" + cityInfo?.name + "区"}
          </div>
        </div>

        <div className={styles.weatherInfo}>
          <img
            src={`https://icons.qweather.com/assets/icons/${weatherData?.now?.icon}.svg`}
            alt=""
            className={styles.weatherIcon}
          />
          <div className={styles.detail}>{weatherData?.now?.text}</div>
        </div>
        <div className={styles.temp}>
          当前温度：{weatherData?.now?.temp}&#8451;
        </div>
      </div>

      <div className={styles.musicView}>
        <div className={styles.lyric}>{nusicInfo?.lyric}</div>
        <div className={styles.songTitle}>——{nusicInfo?.songTitle}</div>
      </div>
    </div>
  );
};

export default HomePage;
