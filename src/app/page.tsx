import Header from "./components/Header";
import ImageDetails from "./components/ImageDetails";
import ImageList from "./components/ImageList";
import { ImageProvider } from "./contexts/ImageDetailsContext";

export default function Home() {
  return (
    <div>
      <ImageProvider>
        <Header />
        <ImageList />
        <ImageDetails />
      </ImageProvider>

      <p className="text-primary-color">text</p>
    </div>
  );
}
