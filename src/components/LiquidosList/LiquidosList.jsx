import Liquido from "../Liquido/Liquido";

const LiquidoCard = ( {liquidos} ) => {
  return (
    <div className='container text-center'>
        <div className="row justify-content-center">
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