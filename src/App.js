import './App.css';
import LinkCard from './LinkCard/linkcard'

function App() {
  const data = [
    {
      title: "Linkedin",
      tagline: "follow me on LINKEDIN",
      username: "vaishnavichoudhary",
      link :"http://linkedin.com/in/vaishnavi-choudhary-845a4a1b7"
      
    }, 
    {
      title: "Github",
      tagline: "follow me on GITHUB",
      username: "vaishh.101",
      link : "http://github.com/vaishh-101"
    }, 
    {
      title: "Twitter",
      tagline: "follow me on TWITTER",
      username: "@101_vaishnavi",
      link: "http://twitter.com/@101_vaishnavi",
    },
    {
      title: "Insta",
      tagline: "follow me on INSTAGRAM",
      username: "vaishh.101",
      link :"http://instagram.com/vaishh.101" 
    },
    {
    title: "Snap",
      tagline: "follow me on SNAPCHAT",
      username: "vaishh_101",
      link :"http://snapchat.com/vaishh_101" 
    }

  ];
  return (
    <div className="container">
      <h1 className="app-title">Linktree</h1>
      {
        data.map((cardinfo) => {
          return <LinkCard  title={cardinfo.title} 
          tagline={cardinfo.tagline} 
          username={cardinfo.username}
          link={cardinfo.link}
          />
        })
      } </div>
  );
}

export default App;
