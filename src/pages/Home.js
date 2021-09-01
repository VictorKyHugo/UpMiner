import CardList from "../components/CardList";
import Header from "../components/Header";
import Input from "../components/Input";
import Nav from "../components/Nav";
import { OptionProvider } from "../contexts/OptionContext";



function Home() {
  return (
    <div>
      <OptionProvider>
        <Header />
        <Nav />
        <Input />
        <CardList />
      </OptionProvider>
    </div>
  );
}

export default Home;
