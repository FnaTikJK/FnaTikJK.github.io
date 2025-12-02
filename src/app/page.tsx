import styles from "./page.module.css";
import Header from "@/components/Header";
import Title from "@/components/Title";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
        <Header />
        <Title />
        <About />
        <Skills />
        <Projects />
        <Footer />
    </div>
  );
}
