import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Entry.module.css";
import EntryPageHeader from "../components/EntryPageHeader";
import EntryPageFooter from "@/components/EntryPageFooter";
import EntryPageCenterBar from "@/components/EntryPageCenterBar";
import { ImageList, ImageListItem, useMediaQuery } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const imgData = [
  {
    img: "https://assets.skool.com/skool/4a532a8d526a43faa120e4c42bb9463c.png",
    title: "Turn your passion",
  },
  {
    img: "https://assets.skool.com/skool/f7863e11e92a4ad796e44841e5c4371e.png",
    title: "Into a Community",
  },
  {
    img: "https://assets.skool.com/skool/d1f2c4971b6f440ab6f24823468e8607.png",
    title: "Learn Together",
  },
  {
    img: "https://assets.skool.com/skool/6f1bb511462644009de19e949b8b2c20.png",
    title: "Make Money",
  },
];

export default function Entry() {
  const matchDown = useMediaQuery('(max-width:1320px)');
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <EntryPageHeader />
        <div className={styles.content} data-testid="content">
          <div className={styles.title}>Community platform for creators</div>
          <div className={styles.description}>
            Part community, part game, part business, part learning. Earn a
            living bringing people together to collaborate on shared goals and
            interests. Make friends, hangout, earn money, and have fun!
          </div>
          <EntryPageCenterBar />
          <ImageList gap={2} cols={matchDown ? 2 : 4}>
            {imgData.map((item) => (
              <ImageListItem
                key={item.img}
                sx={{ width: "324px", height: "253px" }}
              >
                <img src={item.img} alt={item.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <EntryPageFooter />
      </main>
    </>
  );
}