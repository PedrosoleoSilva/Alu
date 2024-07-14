import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const primaria = {backgroundColor: props.corSecundaria}
    const secundaria = {borderColor: props.corPrimaria}
    return (
      (props.colaboradores.length > 0) ? <section className='time' style={primaria}>
            <h3 style={secundaria}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                />)}
            </div>
        </section>
        : ''
    );
}

export default Time;