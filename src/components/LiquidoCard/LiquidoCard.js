import Liquido from "../Liquido/Liquido";

function LiquidoCard( {liquidos} ) {
  return (
    <div className='container'>
        <div className="row">
            {
                liquidos.map(liquido => (
                    <Liquido key={liquido.id} liquido={liquido}/>
                ))
            }
        </div>
    </div>
  );
}

export default LiquidoCard;