import React from "react";
import Recommendation from "./components/11Component/Recommendation";
import Card2 from "./components/Card/Card";
import pillowImg from "./components/Card/Image1.png";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Recommendation />

      <div style={{ display: 'flex', gap: '20px', padding: '20px', flexWrap: 'wrap' }}>
        <Card2 
          title="ПОДУШКА POP 1" 
          category="Интерьерная подушка" 
          price="12" 
          imageUrl={pillowImg} 
        />
        <Card2 
          title="ПОДУШКА POP 2" 
          category="Интерьерная подушка" 
          price="15" 
          imageUrl={pillowImg} 
        />
        <Card2 
          title="ПОДУШКА POP 3" 
          category="Интерьерная подушка" 
          price="20" 
          imageUrl={pillowImg} 
        />

         <Footer />
      </div>
    </div>
  );
}

export default App;