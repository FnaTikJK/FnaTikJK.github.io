import styles from "./page.module.css";
import { Header } from "@/components/Header";
import Header2 from "@/components/HeaderV2";
import {Heading, SlideFade} from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.page}>
        <Header2 />
        <SlideFade in transition={{enter: {duration: 0.9}}}>
            <Heading size={"4xl"} color={"white"}>
                Fullstack developer & DevOps
            </Heading>
        </SlideFade >
        <div>
            rtstre
        </div>
    </div>
  );
}
