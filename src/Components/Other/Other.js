import Layout from '../TierContainer/TierContainer'
import TileHolder from '../TileHolders/TileHolder'



function Other(props) {
  return (
    <div className="App">
      <h1>{props.page}</h1>
      <header>Tier list title</header>
      <Layout></Layout>
      <Layout></Layout>
      <Layout></Layout>
      <TileHolder></TileHolder>
    </div>
  );
}

export default Other;
